import urllib.request
import re
import os

print('=== LOCAL CAMPAIGN FILES ===')
local_files = os.listdir('public/campaigns')
for f in sorted(local_files):
    print(f)

posts = [
    'makingudaipurproud',
    'the-greatestest-denim-fest',
    'field-club-dandiya-2023-2025',
    'mewar-tourism-cup',
    'hbf',
    'tiecon-2023-and-2025',
    'udaipur-tea-fest',
    'udaipur-winter-carnival'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print('\n=== LIVE SITE GALLERY IMAGES ===')
for p in posts:
    url = f'https://praaroop.com/{p}/'
    print(f'*** POST: {p}')
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+', html)
        valid = set()
        for i in imgs:
            clean = i.split('?')[0]
            if any(clean.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if 'footer' not in clean and 'logo' not in clean.lower() and 'calendar' not in clean.lower():
                    valid.add(clean)
        for img in sorted(valid):
            print('  ', img)
    except Exception as e:
        print('  Error:', e)
