import urllib.request
import os

service_images = [
    # Digital Marketing
    "brand-strategy.webp",
    "social-media.webp",
    "website-development.webp",
    "political-campaign.webp",
    "content-creation.webp",
    "influencer.webp",
    
    # Outdoor Marketing
    "airport-advertising.webp",
    "hoarding-advertising.webp",
    "watching-a-movie.webp",
    "bus-advertising.webp",
    "auto-rickshaw.webp",
    "newspaper.webp",
    "cycle-AD.webp",
    "no-parking.webp",
    "pole-advertising.webp",
    "radio-1.webp",
    "mobile-van.webp",
    "print-advertising.webp",
    "rickshaw.webp",
    "transport.webp",
    "store.webp",
    
    # Activations
    "mall.webp",
    "corporate.webp",
    "school.webp"
]

base_url = "https://praaroop.com/wp-content/uploads/2025/02/"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('public/services', exist_ok=True)

print("=== DOWNLOADING RELEVANT ORIGINAL SERVICE TILE IMAGES FROM LIVE SITE ===")

for img_name in service_images:
    url = base_url + img_name
    local_path = os.path.join('public/services', img_name)
    try:
        req = urllib.request.Request(url, headers=headers)
        data = urllib.request.urlopen(req, timeout=10).read()
        with open(local_path, 'wb') as f:
            f.write(data)
        print(f"Downloaded: {img_name} -> /services/{img_name}")
    except Exception as e:
        print(f"Failed to download {img_name} ({url}): {e}")
