import urllib.request
import re
import os

posts = [
    'field-club-dandiya-2023-2025',
    'makingudaipurproud',
    'the-greatestest-denim-fest',
    'mewar-tourism-cup',
    'hbf',
    'tiecon-2023-and-2025',
    'udaipur-tea-fest',
    'udaipur-winter-carnival'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('public/campaigns', exist_ok=True)

campaign_gallery_map = {}

for p in posts:
    url = f'https://praaroop.com/{p}/'
    print(f'\n=== Fetching campaign page: {p} ({url}) ===')
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        # Find all wp-content upload images
        imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+', html)
        
        valid_imgs = []
        seen = set()
        for i in imgs:
            clean = i.split('?')[0]
            # Exclude site header logos, footers, calendars, thumbnails (like -150x150, -300x169, -75x75)
            if any(clean.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if not any(k in clean.lower() for k in ['footer', 'calendar', 'logo', 'praaroop-media-and-adv', '-150x150', '-75x75', '-300x', '-400x', '-460x']):
                    if clean not in seen:
                        seen.add(clean)
                        valid_imgs.append(clean)
        
        print(f'Found {len(valid_imgs)} campaign image URLs:')
        
        saved_paths = []
        for idx, img_url in enumerate(valid_imgs):
            ext = os.path.splitext(img_url)[1]
            filename = f"{p}_real_{idx}{ext}"
            local_path = os.path.join('public/campaigns', filename)
            
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                data = urllib.request.urlopen(img_req).read()
                with open(local_path, 'wb') as f:
                    f.write(data)
                print(f"  Downloaded: {img_url} -> /campaigns/{filename}")
                saved_paths.append(f"/campaigns/{filename}")
            except Exception as download_err:
                print(f"  Failed download {img_url}: {download_err}")
                
        campaign_gallery_map[p] = saved_paths
        
    except Exception as e:
        print(f"Failed to fetch page {url}: {e}")

print("\n=== DOWNLOAD COMPLETE ===")
for p, imgs in campaign_gallery_map.items():
    print(f"'{p}': {len(imgs)} images")
