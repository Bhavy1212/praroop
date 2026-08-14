import os
import urllib.request

VIDEOS_DIR = os.path.join("public", "services", "videos")
os.makedirs(VIDEOS_DIR, exist_ok=True)

# Direct working MP4 URLs for tech / abstract motion graphic video loops
VIDEO_SOURCES = {
    "brand-strategy.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "social-marketing.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "web-development.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "political-campaign.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "content-creation.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "influencer-marketing.mp4": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for fname, url in VIDEO_SOURCES.items():
    filepath = os.path.join(VIDEOS_DIR, fname)
    print(f"Downloading {fname}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as out_file:
            out_file.write(resp.read())
        print(f"Successfully saved {filepath} ({os.path.getsize(filepath)} bytes)")
    except Exception as e:
        print(f"Failed to download {fname}: {e}")
