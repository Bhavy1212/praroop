import urllib.request
import re
import os

urls = [
    'https://praaroop.com/',
    'https://praaroop.com/about-us/',
    'https://praaroop.com/campaigns/',
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in urls:
    print('=== URL:', url)
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'https://praaroop\.com/wp-content/uploads/[^\s"\'<>\)\\]+', html)
        valid = set()
        for i in imgs:
            clean = i.split('?')[0]
            if any(clean.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                valid.add(clean)
        for img in sorted(valid):
            print('  ', img)
    except Exception as e:
        print('  Error:', e)
