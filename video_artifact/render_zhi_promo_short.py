"""Short, bright 16:9 Zhi Systems promo; renders a separate 1080p MP4."""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "videos"
WORK = OUT / "zhi_promo_short_work"
WORK.mkdir(parents=True, exist_ok=True)
W, H, FPS = 1920, 1080, 30
AUDIO = WORK / "ava-short-voiceover.mp3"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def word(name, value):
    path = WORK / name
    path.write_text(value, encoding="utf-8")
    return path

def main():
    site = ROOT / "video_artifact" / "site-app-listings.jpg"
    micro = ROOT / "video_artifact" / "site-micro.jpg"
    logo = ROOT / "client" / "public" / "zhi-systems-logo.png"
    title = word("title.txt", "CUSTOM AI APPS, MADE FOR YOUR IDEA.")
    proof = word("proof.txt", "THE APPLICATIONS ON ZHISYSTEMS.AI ARE EXAMPLES OF APPS WE'VE ALREADY CREATED.")
    action = word("action.txt", "START WITH YOUR IDEA.  /  ZHISYSTEMS.AI")

    # 20.5 second 16:9 composition. Site images are unaltered captures of the
    # running public app; only editorial labels are composited around them.
    filters = f"""
    [0:v]format=rgba,drawbox=x=0:y=0:w={W}:h={H}:color=0xF8FAFE:t=fill[b];
    movie={site},scale=1460:821,format=rgba[site];
    movie={micro},scale=1180:664,format=rgba[micro];
    movie={logo},scale=175:-1,format=rgba[logo];
    [b][site]overlay=x='240+18*sin(t*0.8)':y='150+10*cos(t*0.6)':enable='between(t,0,7)'[a];
    [a][micro]overlay=x='370+18*sin(t*0.6)':y='260+8*cos(t*0.5)':enable='between(t,7,15)'[d];
    [d][logo]overlay=90:65[e];
    [e]drawbox=x=0:y=0:w={W}:h=10:color=0x2B6BDC:t=fill,drawbox=x=94:y=185:w=7:h=700:color=0xE5302B:t=fill,
    drawbox=x=125:y=690:w=1660:h=165:color=0xF8FAFE@0.96:t=fill:enable='between(t,0,7)'[f];
    [f]drawtext=fontfile={FONT}:text='ZHI SYSTEMS  /  CUSTOM INTELLIGENCE':fontcolor=0x2B6BDC:fontsize=23:x=155:y=735:alpha='between(t,0.3,6.7)',
    drawtext=fontfile={FONT_BOLD}:textfile={title}:fontcolor=0x14213A:fontsize=57:x=155:y=795:alpha='if(lt(t,0.2),0,if(lt(t,0.9),(t-0.2)/0.7,if(lt(t,6.3),1,7-t)))'[g];
    [g]drawbox=x=125:y=90:w=1670:h=145:color=0xF8FAFE@0.95:t=fill:enable='between(t,7,15)',
    drawtext=fontfile={FONT_BOLD}:textfile={proof}:fontcolor=0x14213A:fontsize=30:x=155:y=145:alpha='if(lt(t,7),0,if(lt(t,8),(t-7),if(lt(t,14),1,15-t)))',
    drawtext=fontfile={FONT}:text='REAL PUBLIC SITE CAPTURES  /  REAL APP EXAMPLES':fontcolor=0xE5302B:fontsize=21:x=158:y=195:alpha='between(t,7.5,14.5)'[h];
    [h]drawbox=x=150:y=350:w=1620:h=280:color=0xF8FAFE@0.97:t=fill:enable='between(t,15,20.5)',
    drawtext=fontfile={FONT_BOLD}:textfile={action}:fontcolor=0xE5302B:fontsize=63:x=205:y=465:alpha='if(lt(t,15),0,if(lt(t,16),t-15,1))',
    drawtext=fontfile={FONT}:text='CUSTOMIZED AI-POWERED APPLICATIONS FOR YOUR NEEDS, INDUSTRY, AND WAY OF WORKING.':fontcolor=0x14213A:fontsize=25:x=208:y=525:alpha='between(t,15.7,20.5)'[outv]
    """.replace("\n", "").replace("    ", "")
    subprocess.run(["ffmpeg", "-y", "-f", "lavfi", "-i", f"color=s={W}x{H}:r={FPS}:d=22",
        "-i", str(AUDIO), "-filter_complex", filters, "-map", "[outv]", "-map", "1:a",
        "-c:v", "libx264", "-preset", "slow", "-crf", "25", "-maxrate", "2M", "-bufsize", "4M",
        "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart",
        str(OUT / "zhi-systems-custom-apps-short-16x9.mp4")], check=True)

if __name__ == "__main__":
    main()