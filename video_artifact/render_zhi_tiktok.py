"""Render the 9:16, narration-only Zhi Systems TikTok promotional film."""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "videos"
WORK = OUT / "zhi_tiktok_work"
OUT.mkdir(parents=True, exist_ok=True)
WORK.mkdir(parents=True, exist_ok=True)
W, H, FPS, DURATION = 1080, 1920, 30, 50
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
    audio = WORK / "zhi-male-narration.mp3"
    url = textfile("url.txt", "ZHISYSTEMS.AI")
    formats = textfile("formats.txt", "FOUR HOUR CERTIFICATIONS\nNANOCERTIFICATIONS  ·  MICROCERTIFICATIONS\nCERTIFICATIONS  ·  APPS")
    topics = textfile("topics.txt", "CRYPTOGRAPHY  ·  EVOLUTIONARY PSYCHOLOGY\nFREUD IN FOUR HOURS  ·  IQ BOOSTER\nARTIFICIAL INTELLIGENCE  ·  ANALYTIC PHILOSOPHY\nPSYCHOLOGY  ·  FINANCE")
    apps_text = textfile("apps.txt", "MODELWIZ  ·  GENIUS 101\nFREUD GPT  ·  GPT BYPASS\nINTELLIGENCE METER")
    custom = textfile("custom.txt", "SHOWN: EXAMPLES OF CUSTOM WORK\nNOT THE LIMIT OF WHAT WE CAN BUILD.")
    final = textfile("final.txt", "THE GO-TO FOR CUTTING-EDGE\nCONSUMER + COMMERCIAL AI")
    # Site captures remain unaltered. They are framed in a vertical editorial camera.
    filt = f"""
    [0:v]format=rgba,scale=2150:1210,setsar=1,split=2[homeA][homeB];
    [1:v]format=rgba,scale=2150:1210,setsar=1[four];
    [2:v]format=rgba,scale=2150:1210,setsar=1[apps];
    [3:v]format=rgba,scale=2150:1210,setsar=1[certs];
    [4:v]format=rgba,scale=240:-1[logo];
    color=c=0xf3f4f6:s={W}x{H}:r={FPS}:d={DURATION},format=rgba,
    geq=r='240+8*sin(0.08*T)':g='244+5*sin(0.11*T)':b='251+3*sin(0.06*T)':a='255'[bg];
    [bg]drawbox=x=0:y=0:w={W}:h=18:color=0x2563eb:t=fill,
    drawbox=x=0:y=1600:w={W}:h=320:color=0x111827:t=fill[base];
    [base][homeA]overlay=x='-490+30*sin(t*0.25)':y='345+10*cos(t*0.30)':enable='between(t,0,8)'[s1];
    [s1][four]overlay=x='-730+35*sin(t*0.21)':y='480+8*cos(t*0.25)':enable='between(t,8,18)'[s2];
    [s2][certs]overlay=x='-350+32*sin(t*0.22)':y='470+10*cos(t*0.28)':enable='between(t,18,28)'[s3];
    [s3][apps]overlay=x='-620+35*sin(t*0.20)':y='470+8*cos(t*0.24)':enable='between(t,28,39)'[s4];
    [s4][homeB]overlay=x='-510+25*sin(t*0.2)':y='430+12*cos(t*0.26)':enable='between(t,39,50)'[s5];
    [s5][logo]overlay=x=72:y=105[logoed];
    [logoed]drawbox=x=62:y=275:w=11:h=1260:color=0x2563eb:t=fill,
    drawbox=x=94:y=310:w=890:h=250:color=0xf3f4f6@0.94:t=fill:enable='between(t,0,8)',
    drawtext=fontfile={FONT_BOLD}:textfile={url}:fontcolor=0x111827:fontsize=74:x=112:y=378:enable='between(t,0,8)',
    drawtext=fontfile={FONT}:text='CUSTOM AI LEARNING + SOFTWARE':fontcolor=0x2563eb:fontsize=29:x=116:y=452:enable='between(t,0.5,8)'[a];
    [a]drawbox=x=94:y=285:w=900:h=370:color=0x111827@0.94:t=fill:enable='between(t,8,18)',
    drawtext=fontfile={FONT_BOLD}:text='CHOOSE YOUR FORMAT':fontcolor=0xf3f4f6:fontsize=47:x=120:y=345:enable='between(t,8,18)',
    drawtext=fontfile={FONT}:textfile={formats}:fontcolor=0xf3f4f6:fontsize=29:line_spacing=24:x=120:y=418:enable='between(t,8.4,18)',
    drawtext=fontfile={FONT_BOLD}:text='FEATURED FOUR HOUR COURSES':fontcolor=0x2563eb:fontsize=31:x=120:y=1450:enable='between(t,9,18)',
    drawtext=fontfile={FONT}:text='TAKE FOUR TO SIX HOURS':fontcolor=0xf3f4f6:fontsize=34:x=120:y=1510:enable='between(t,9.4,18)'[b];
    [b]drawbox=x=94:y=290:w=900:h=430:color=0xf3f4f6@0.96:t=fill:enable='between(t,18,28)',
    drawtext=fontfile={FONT_BOLD}:text='LEARN WHAT MATTERS NOW.':fontcolor=0x111827:fontsize=43:x=120:y=345:enable='between(t,18,28)',
    drawtext=fontfile={FONT}:textfile={topics}:fontcolor=0x111827:fontsize=23:line_spacing=19:x=120:y=425:enable='between(t,18.4,28)'[c];
    [c]drawbox=x=94:y=290:w=900:h=310:color=0x2563eb@0.96:t=fill:enable='between(t,28,39)',
    drawtext=fontfile={FONT_BOLD}:text='APPS, BUILT AROUND THE JOB.':fontcolor=0xf3f4f6:fontsize=42:x=120:y=347:enable='between(t,28,39)',
    drawtext=fontfile={FONT}:textfile={apps_text}:fontcolor=0xf3f4f6:fontsize=28:line_spacing=18:x=120:y=435:enable='between(t,28.5,39)',
    drawtext=fontfile={FONT_BOLD}:textfile={custom}:fontcolor=0xf3f4f6:fontsize=34:line_spacing=18:x=120:y=1450:enable='between(t,31,39)'[d];
    [d]drawbox=x=70:y=280:w=940:h=430:color=0x111827@0.94:t=fill:enable='between(t,39,50)',
    drawtext=fontfile={FONT_BOLD}:textfile={final}:fontcolor=0xf3f4f6:fontsize=38:line_spacing=22:x=112:y=355:enable='between(t,39,50)',
    drawtext=fontfile={FONT}:text='FOR COLLEGES, INDIVIDUALS, BANKS, BUSINESSES + INSTITUTIONS':fontcolor=0xf3f4f6:fontsize=20:x=112:y=520:enable='between(t,40,50)',
    drawbox=x=70:y=1450:w=940:h=170:color=0x2563eb:t=fill:enable='between(t,39,50)',
    drawtext=fontfile={FONT_BOLD}:textfile={url}:fontcolor=0xf3f4f6:fontsize=68:x=130:y=1518:enable='between(t,39,50)'[outv]
    """.replace("\n", "").replace("    ", "")
    cmd = ["ffmpeg", "-y", "-loop", "1", "-t", str(DURATION), "-i", str(home),
           "-loop", "1", "-t", str(DURATION), "-i", str(four),
           "-loop", "1", "-t", str(DURATION), "-i", str(apps),
           "-loop", "1", "-t", str(DURATION), "-i", str(certs),
           "-loop", "1", "-t", str(DURATION), "-i", str(logo),
           "-i", str(audio), "-filter_complex", filt, "-map", "[outv]", "-map", "5:a",
           "-t", str(DURATION), "-c:v", "libx264", "-preset", "medium", "-crf", "21",
           "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart",
           str(OUT / "zhi-systems-tiktok-9x16.mp4")]
    subprocess.run(cmd, check=True)

if __name__ == "__main__":
    main()