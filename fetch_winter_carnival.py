import urllib.request
import re
import os

url = 'https://praaroop.com/udaipur-winter-carnival/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request(url, headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+', html)
valid = []
for i in imgs:
    clean = i.split('?')[0]
    if any(clean.lower().endswith(ext) for ext in ['.jpg', '.png', '.webp']):
        if not any(k in clean.lower() for k in ['footer', 'calendar', 'logo', '-150x150', '-75x75', '-300x169', '-768x432']):
            valid.append(clean)

valid = list(dict.fromkeys(valid))
print('Winter carnival images:', len(valid))
for idx, img_url in enumerate(valid):
    ext = os.path.splitext(img_url)[1]
    filename = f'real_udaipur-winter-carnival_{idx}{ext}'
    local_path = os.path.join('public/campaigns', filename)
    try:
        data = urllib.request.urlopen(urllib.request.Request(img_url, headers=headers)).read()
        with open(local_path, 'wb') as f:
            f.write(data)
        print(' Saved:', filename)
    except Exception as e:
        print(' Error:', e)
