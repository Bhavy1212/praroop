import urllib.request
import re
import os

url = "https://praaroop.com/"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request(url, headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+', html)
unique_imgs = sorted(list(set(imgs)))

os.makedirs('public/services', exist_ok=True)

print(f"Total unique upload images found on homepage: {len(unique_imgs)}")

for img_url in unique_imgs:
    clean = img_url.split('?')[0]
    if any(clean.lower().endswith(ext) for ext in ['.webp', '.png', '.jpg', '.jpeg']):
        basename = os.path.basename(clean)
        if not any(k in basename.lower() for k in ['footer', 'calendar', 'logo', '-150x150', '-75x75', '-300x', '-400x', '-460x', 'praaroop-media-and-adv']):
            local_path = os.path.join('public/services', basename)
            try:
                data = urllib.request.urlopen(urllib.request.Request(clean, headers=headers)).read()
                with open(local_path, 'wb') as f:
                    f.write(data)
                print(f"Downloaded: {basename} -> {clean}")
            except Exception as e:
                print(f"Failed {basename}: {e}")
