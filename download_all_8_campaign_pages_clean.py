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
    print(f'Fetching: {p}')
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        # Find wp-content/uploads images containing page-00
        imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+page-00[0-9]+[^\s"\'<>\)\\]*', html)
        
        valid_imgs = []
        seen_pages = set()
        for i in imgs:
            clean = i.split('?')[0]
            # Match high-res page image (e.g. 1024x576 or full image without thumbnail dims)
            if any(clean.lower().endswith(ext) for ext in ['.jpg', '.png', '.webp']):
                if not any(dim in clean for dim in ['-150x150', '-75x75', '-300x169', '-768x432']):
                    page_match = re.search(r'page-00[0-9]+', clean)
                    if page_match:
                        page_num = page_match.group(0)
                        if page_num not in seen_pages:
                            seen_pages.add(page_num)
                            valid_imgs.append(clean)
        
        saved_paths = []
        for idx, img_url in enumerate(valid_imgs):
            ext = os.path.splitext(img_url)[1]
            filename = f"real_{p}_{idx}{ext}"
            local_path = os.path.join('public/campaigns', filename)
            
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                data = urllib.request.urlopen(img_req, timeout=10).read()
                with open(local_path, 'wb') as f:
                    f.write(data)
                saved_paths.append(f"/campaigns/{filename}")
                print(f"  Saved: /campaigns/{filename}")
            except Exception as download_err:
                print(f"  Error downloading {img_url}: {download_err}")
                
        campaign_gallery_map[p] = saved_paths
        
    except Exception as e:
        print(f"  Error fetching page {url}: {e}")

print("\n=== SUMMARY MAP ===")
import json
print(json.dumps(campaign_gallery_map, indent=2))
