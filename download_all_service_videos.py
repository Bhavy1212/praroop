import os
import subprocess

VIDEOS_DIR = os.path.join("public", "services", "videos")
os.makedirs(VIDEOS_DIR, exist_ok=True)

VIDEO_SOURCES = {
    "brand-strategy.mp4": "https://vjs.zencdn.net/v/oceans.mp4",
    "social-marketing.mp4": "https://media.w3.org/2010/05/sintel/trailer.mp4",
    "web-development.mp4": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "political-campaign.mp4": "https://www.w3schools.com/html/mov_bbb.mp4",
    "content-creation.mp4": "https://vjs.zencdn.net/v/oceans.mp4",
    "influencer-marketing.mp4": "https://media.w3.org/2010/05/sintel/trailer.mp4"
}

for fname, url in VIDEO_SOURCES.items():
    outpath = os.path.join(VIDEOS_DIR, fname)
    print(f"Downloading {fname}...")
    cmd = ["curl.exe", "-s", "-L", url, "-o", outpath]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(outpath):
        size = os.path.getsize(outpath)
        print(f"Saved {fname} ({size} bytes)")
    else:
        print(f"Failed {fname}")
