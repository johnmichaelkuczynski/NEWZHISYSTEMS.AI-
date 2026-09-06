"""Render the 9:16 Zhi Systems TikTok film with a calm, natural voiceover."""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "videos"
WORK = OUT / "zhi_tiktok_work"
OUT.mkdir(parents=True, exist_ok=True)
WORK.mkdir(parents=True, exist_ok=True)
W, H, FPS, DURATION = 1080, 1920, 30, 32
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def textfile(name, text):
    p = WORK / name
    p.write_text(text, encoding="utf-8")
    return p

def main():
    logo = ROOT / "attached_assets" / "zhi-systems-official-logo.png"
    home = ROOT / "attached_assets" / "zhi-home-actual.jpg"
    four = ROOT / "attached_assets" / "zhi-four-hour-actual.jpg"
    apps = ROOT / "attached_assets" / "zhi-apps-actual.jpg"
    certs = ROOT / "attached_assets" / "zhi-certifications-actual.jpg"
    audio = (
        ROOT
        / "attached_assets"
        / "generated_audio"
        / "zhi-natural-male-v2.mp3"
    )
    url = textfile("url.txt", "ZHISYSTEMS.AI")
    kicker = textfile("kicker.txt", "HIGH-PERFORMANCE AI TOOLS FOR WRITERS, THINKERS, AND ANALYSTS")
    learning = textfile("learning.txt", "FOCUSED AI LEARNING")
    formats = textfile("formats.txt", "FOUR HOUR  /  NANO  /  MICRO\nCERTIFICATIONS")
    topics = textfile("topics.txt", "AI  ·  FINANCE\nPSYCHOLOGY  ·  CRYPTOGRAPHY")
    build = textfile("build.txt", "CUSTOM SOFTWARE\nFOR THE WORK IN FRONT OF YOU")
    final = textfile("final.txt", "PRACTICAL.\nFLEXIBLE.\nBUILT AROUND YOUR WORK.")
    # Five actual captures are presented as five different editorial treatments:
    # full-bleed crop, framed browser panel, close-up crop, split-screen panels,
    # then a final full-bleed return. This prevents the film reading as one
    # repeated website backdrop with interchangeable cards.
    filt = f"""
    [0:v]scale=3413:1920,crop=1080:1920:x='150+120*t':y=0,trim=duration=7.2,setpts=PTS-STARTPTS[a];
    [1:v]scale=920:518,setsar=1,split=1[p2img];
    color=c=0xf3f5f8:s=1080x1920:r=25:d=7.2,drawbox=x=44:y=298:w=992:h=574:color=0x246BFD@0.16:t=fill,drawbox=x=65:y=319:w=950:h=532:color=0x071526@0.12:t=fill[p2bg];
    [p2bg][p2img]overlay=x=80:y='335+12*sin(t*0.7)'[b];
    [2:v]scale=3413:1920,crop=1080:1920:x='490+120*t':y=0,trim=duration=7.2,setpts=PTS-STARTPTS[c];
    [3:v]split=2[p4one][p4two];
    [p4one]scale=820:461,setsar=1[p4a];
    [p4two]scale=420:236,setsar=1[p4b];
    color=c=0x071526:s=1080x1920:r=25:d=7.2,drawbox=x=0:y=0:w=1080:h=22:color=0x246BFD:t=fill[p4bg];
    [p4bg][p4a]overlay=x=130:y='260+16*sin(t*0.55)'[p4top];
    [p4top][p4b]overlay=x='570+20*sin(t*0.6)':y='965+10*cos(t*0.5)'[d];
    [4:v]scale=3413:1920,crop=1080:1920:x='720+95*t':y=0,trim=duration=7.2,setpts=PTS-STARTPTS[e];
    [a][b]xfade=transition=wipeleft:duration=0.7:offset=6.5[ab];
    [ab][c]xfade=transition=slideup:duration=0.7:offset=13.0[abc];
    [abc][d]xfade=transition=wipeleft:duration=0.7:offset=19.5[abcd];
    [abcd][e]xfade=transition=slideup:duration=0.7:offset=26.0[cut];
    [5:v]format=rgba,scale=290:-1[logo];
    [cut]format=rgba,drawbox=x=0:y=0:w={W}:h={H}:color=0x071526@0.22:t=fill,
    drawbox=x=0:y=0:w={W}:h=22:color=0x246BFD:t=fill,
    drawbox=x=0:y=1810:w={W}:h=110:color=0x071526@0.82:t=fill[base];
    [base][logo]overlay=x=58:y=62[brand];
    [brand]drawtext=fontfile={FONT_BOLD}:textfile={url}:fontcolor=white:fontsize=58:x=58:y=165:enable='between(t,0,6.6)+between(t,26,32)',
    drawtext=fontfile={FONT}:textfile={kicker}:fontcolor=0xdbeafe:fontsize=20:x=62:y=245:enable='between(t,0.5,6.6)',
    drawbox=x=48:y=1130:w=895:h=365:color=0x071526@0.90:t=fill:enable='between(t,0.5,6.6)',
    drawtext=fontfile={FONT_BOLD}:text='SHARPER MINDS.':fontcolor=white:fontsize=68:x=80:y=1215:enable='between(t,0.8,6.6)',
    drawtext=fontfile={FONT_BOLD}:text='SMARTER TOOLS.':fontcolor=0x72a5ff:fontsize=68:x=80:y=1300:enable='between(t,1.4,6.6)',
    drawtext=fontfile={FONT}:text='AI education + custom software':fontcolor=white:fontsize=29:x=82:y=1395:enable='between(t,2.0,6.6)'[s1];
    [s1]drawbox=x=48:y=1090:w=900:h=435:color=white@0.94:t=fill:enable='between(t,6.7,13.1)',
    drawtext=fontfile={FONT_BOLD}:textfile={learning}:fontcolor=0x071526:fontsize=59:x=78:y=1185:enable='between(t,6.9,13.1)',
    drawtext=fontfile={FONT}:textfile={formats}:fontcolor=0x246BFD:fontsize=37:line_spacing=26:x=80:y=1285:enable='between(t,7.5,13.1)'[s2];
    [s2]drawbox=x=48:y=1090:w=900:h=370:color=0x246BFD@0.94:t=fill:enable='between(t,13.2,19.6)',
    drawtext=fontfile={FONT_BOLD}:text='LEARN WHAT MATTERS NOW.':fontcolor=white:fontsize=48:x=78:y=1185:enable='between(t,13.4,19.6)',
    drawtext=fontfile={FONT}:textfile={topics}:fontcolor=white:fontsize=37:line_spacing=28:x=80:y=1282:enable='between(t,14.0,19.6)'[s3];
    [s3]drawbox=x=48:y=1440:w=900:h=330:color=0x071526@0.94:t=fill:enable='between(t,19.7,26.1)',
    drawtext=fontfile={FONT_BOLD}:textfile={build}:fontcolor=white:fontsize=43:line_spacing=18:x=78:y=1490:enable='between(t,19.9,26.1)',
    drawtext=fontfile={FONT}:text='MODELWIZ  ·  GENIUS 101  ·  FREUD GPT':fontcolor=0x72a5ff:fontsize=23:x=80:y=1650:enable='between(t,20.7,26.1)'[s4];
    [s4]drawbox=x=48:y=1055:w=900:h=525:color=0x246BFD@0.96:t=fill:enable='between(t,26.2,32)',
    drawtext=fontfile={FONT_BOLD}:textfile={final}:fontcolor=white:fontsize=65:line_spacing=22:x=78:y=1160:enable='between(t,26.5,32)',
    drawtext=fontfile={FONT_BOLD}:textfile={url}:fontcolor=white:fontsize=61:x=78:y=1510:enable='between(t,27.8,32)'[outv]
    """.replace("\n", "").replace("    ", "")
    cmd = ["ffmpeg", "-y", "-loop", "1", "-t", "7.2", "-i", str(home),
            "-loop", "1", "-t", "7.2", "-i", str(four),
            "-loop", "1", "-t", "7.2", "-i", str(certs),
            "-loop", "1", "-t", "7.2", "-i", str(apps),
            "-loop", "1", "-t", "7.2", "-i", str(home),
            "-loop", "1", "-t", str(DURATION), "-i", str(logo),
            "-i", str(audio), "-filter_complex", filt, "-map", "[outv]", "-map", "6:a",
           "-t", str(DURATION), "-c:v", "libx264", "-preset", "medium", "-crf", "21",
           "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart",
           str(OUT / "zhi-systems-tiktok-9x16.mp4")]
    subprocess.run(cmd, check=True)

if __name__ == "__main__":
    main()