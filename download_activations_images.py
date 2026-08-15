import urllib.request
import os

images = {
    "mall-activation": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1000&h=800&fit=crop&auto=format&q=85",
    "retail-pos": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=800&fit=crop&auto=format&q=85",
    "corporate-summit": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&h=800&fit=crop&auto=format&q=85",
    "campus-fest": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&h=800&fit=crop&auto=format&q=85"
}

outdir = os.path.join("public", "services", "activations")
os.makedirs(outdir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for name, url in images.items():
    filepath = os.path.join(outdir, f"{name}.webp")
    print(f"Downloading {name}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(filepath, 'wb') as f:
                f.write(data)
        print(f"  Saved {filepath} ({len(data)} bytes)")
    except Exception as e:
        print(f"  Error: {e}")
