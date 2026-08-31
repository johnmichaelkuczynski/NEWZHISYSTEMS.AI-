"""Second, light-editorial 16:9 render using captured public Zhi Systems pages."""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "videos"
WORK = OUT / "zhi_promo_bright_work"
WORK.mkdir(parents=True, exist_ok=True)
AUDIO = WORK / "ava-voiceover.mp3"

W, H, FPS = 1920, 1080, 30
HOME = ROOT / "video_artifact" / "site-app-listings.jpg"
MICRO = ROOT / "video_artifact" / "site-micro.jpg"
COURSES = ROOT / "video_artifact" / "site-courses.jpg"
LOGO = ROOT / "client" / "public" / "zhi-systems-logo.png"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def run(cmd):
    subprocess.run(cmd, check=True)

def txt(name, value):
    p = WORK / name
    p.write_text(value, encoding="utf-8")
    return p

def main():
    # All product imagery is a capture of the running, public Zhi Systems website.
    headline = txt("headline.txt", "CUSTOM AI, BUILT AROUND REAL WORK")
    promise = txt("promise.txt", "EDUCATION  /  FINANCE  /  WRITING  /  PSYCHOLOGY  /  COGNITIVE ENHANCEMENT")
    freud = txt("freud.txt", "FREUDGPT")
    genius = txt("genius.txt", "GENIUS 101")
    certs = txt("certs.txt", "ZHI MICROCERTIFICATIONS")
    cta = txt("cta.txt", "GO TO ZHISYSTEMS.AI")
    detail1 = txt("detail1.txt", "REAL THINKERS. ACTUAL WRITINGS. A DEEPER KIND OF DIALOGUE.")
    detail2 = txt("detail2.txt", "CONVERSE. QUESTION. GENERATE LONG-FORM WORK.")
    detail3 = txt("detail3.txt", "AI FUNDAMENTALS  /  AI MATH FUNDAMENTALS  /  VERIFIED MASTERY.")

    # Moving page captures stay clear and dominant. The pale paper backdrop and
    # cobalt/red site accents are directly derived from the live public pages.
    fc = f"""
    [0:v]format=rgba,drawbox=x=0:y=0:w={W}:h={H}:color=0xF7F8FC:t=fill[bg];
    movie={HOME},scale=1530:861,format=rgba[home];
    movie={MICRO},scale=1400:788,format=rgba[micro];
    movie={COURSES},scale=1400:788,format=rgba[courses];
    movie={LOGO},scale=190:-1,format=rgba[logo];
    [bg][home]overlay=x='210+25*sin(t*0.7)':y='135+10*cos(t*0.4)':enable='between(t,0,9)'[a];
    [a][micro]overlay=x='455+25*sin(t*0.6)':y='160+12*cos(t*0.4)':enable='between(t,9,34)'[b];
    [b][courses]overlay=x='360+25*sin(t*0.5)':y='165+10*cos(t*0.3)':enable='between(t,34,42)'[c];
    [c][logo]overlay=92:65[d];
    [d]drawbox=x=0:y=0:w={W}:h=10:color=0x2C68D8:t=fill,
    drawbox=x=110:y=190:w=8:h=680:color=0xE3312A:t=fill,
    drawbox=x=125:y=700:w=1550:h=155:color=0xF7F8FC@0.94:t=fill:enable='between(t,0,8)',
    drawbox=x=0:y=0:w={W}:h={H}:color=0xF7F8FC@0.0:t=fill[e];
    [e]drawtext=fontfile={FONT_BOLD}:textfile={headline}:fontcolor=0x16233A:fontsize=58:x=155:y=775:alpha='if(lt(t,0.2),0,if(lt(t,1),(t-0.2)/0.8,if(lt(t,7),1,if(lt(t,8),8-t,0))))'[f];
    [f]drawtext=fontfile={FONT}:text='ZHI SYSTEMS  /  CUSTOM INTELLIGENCE':fontcolor=0x2C68D8:fontsize=23:x=158:y=735:alpha='between(t,0.5,7.5)'[g];
    [g]drawtext=fontfile={FONT_BOLD}:textfile={promise}:fontcolor=0x16233A:fontsize=29:x=125:y=830:alpha='if(lt(t,7),0,if(lt(t,8),(t-7),if(lt(t,12),1,if(lt(t,13),13-t,0))))'[h];
    [h]drawbox=x=125:y=385:w=565:h=160:color=0xF7F8FC@0.94:t=fill:enable='between(t,13,23)',
    drawtext=fontfile={FONT_BOLD}:textfile={freud}:fontcolor=0xE3312A:fontsize=68:x=155:y=430:alpha='if(lt(t,13),0,if(lt(t,14),t-13,if(lt(t,22),1,23-t)))',
    drawtext=fontfile={FONT}:textfile={detail1}:fontcolor=0x16233A:fontsize=23:x=160:y=475:alpha='between(t,14,22)'[i];
    [i]drawbox=x=995:y=305:w=690:h=210:color=0xF7F8FC@0.94:t=fill:enable='between(t,22,32)',
    drawtext=fontfile={FONT_BOLD}:textfile={genius}:fontcolor=0x2C68D8:fontsize=68:x=1030:y=355:alpha='if(lt(t,22),0,if(lt(t,23),t-22,if(lt(t,31),1,32-t)))',
    drawtext=fontfile={FONT}:textfile={detail2}:fontcolor=0x16233A:fontsize=22:x=1035:y=410:alpha='between(t,23,31)'[j];
    [j]drawbox=x=130:y=250:w=865:h=170:color=0xF7F8FC@0.94:t=fill:enable='between(t,32,40)',
    drawtext=fontfile={FONT_BOLD}:textfile={certs}:fontcolor=0x2C68D8:fontsize=49:x=165:y=300:alpha='if(lt(t,32),0,if(lt(t,33),t-32,if(lt(t,39),1,40-t)))',
    drawtext=fontfile={FONT}:textfile={detail3}:fontcolor=0x16233A:fontsize=22:x=168:y=350:alpha='between(t,33,39)'[k];
    [k]drawbox=x=125:y=305:w=1050:h=210:color=0xF7F8FC@0.95:t=fill:enable='between(t,40,43)',
    drawtext=fontfile={FONT_BOLD}:textfile={cta}:fontcolor=0xE3312A:fontsize=75:x=160:y=420:alpha='if(lt(t,40),0,if(lt(t,41),t-40,1))',
    drawtext=fontfile={FONT}:text='CUSTOM SYSTEMS FOR THE WAY PEOPLE LEARN, THINK, WRITE, AND DECIDE.':fontcolor=0x16233A:fontsize=26:x=163:y=470:alpha='between(t,40.6,43)'[outv]
    """.replace("\n", "").replace("    ", "")
    run(["ffmpeg", "-y", "-f", "lavfi", "-i", f"color=s={W}x{H}:r={FPS}:d=48",
         "-i", str(AUDIO), "-filter_complex", fc, "-map", "[outv]", "-map", "1:a",
         "-c:v", "libx264", "-preset", "medium", "-crf", "19", "-c:a", "aac", "-b:a", "192k",
         "-shortest", "-movflags", "+faststart", str(OUT / "zhi-systems-promo-light-site-16x9.mp4")])

if __name__ == "__main__":
    main()