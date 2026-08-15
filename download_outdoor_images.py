import urllib.request
import os

images = {
    "airport": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&h=1200&fit=crop&auto=format&q=85",
    "hoarding": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=1200&fit=crop&auto=format&q=85",
    "theater": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1200&fit=crop&auto=format&q=85",
    "bus": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=1200&fit=crop&auto=format&q=85",
    "auto-hood": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&h=1200&fit=crop&auto=format&q=85",
    "newspaper": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=1200&fit=crop&auto=format&q=85",
    "tricycle": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=1200&fit=crop&auto=format&q=85",
    "no-parking": "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=1200&fit=crop&auto=format&q=85",
    "pole": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=1200&fit=crop&auto=format&q=85",
    "radio": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=1200&fit=crop&auto=format&q=85",
    "mobile-van": "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=1200&fit=crop&auto=format&q=85",
    "pamphlet": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=1200&fit=crop&auto=format&q=85"
}

outdir = os.path.join("public", "services", "outdoor")
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
