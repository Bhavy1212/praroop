import urllib.request
import re

req = urllib.request.Request('https://appinventivdigital.com/', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = urllib.request.urlopen(req).read().decode('utf-8')
scripts = re.findall(r'src=["\']([^"\']+\.js)["\']', html)
print(f"Found {len(scripts)} scripts")
for s in scripts:
    if not s.startswith('http'):
        s = 'https://appinventivdigital.com' + s
    try:
        js = urllib.request.urlopen(urllib.request.Request(s, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
        if 'benchmark' in js.lower() or 'leadership' in js.lower():
            print(f'Match in {s}')
            for m in re.finditer(r'benchmark|leadership', js, re.I):
                idx = m.start()
                print(js[max(0, idx-200):min(len(js), idx+300)])
                print('='*40)
    except Exception as e:
        pass
