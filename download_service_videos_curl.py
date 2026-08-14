import os
import subprocess

VIDEOS_DIR = os.path.join("public", "services", "videos")
os.makedirs(VIDEOS_DIR, exist_ok=True)

VIDEO_SOURCES = {
    "brand-strategy.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "social-marketing.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "web-development.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "political-campaign.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "content-creation.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "influencer-marketing.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
}

for fname, url in VIDEO_SOURCES.items():
    outpath = os.path.join(VIDEOS_DIR, fname)
    print(f"Downloading {fname} via curl...")
    cmd = ["curl.exe", "-s", "-L", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", url, "-o", outpath]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(outpath):
        print(f"Saved {fname} ({os.path.getsize(outpath)} bytes)")
    else:
        print(f"Failed {fname}")
