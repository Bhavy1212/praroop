import os

files = os.listdir('public/campaigns')
print(f"Total campaign image files: {len(files)}")
for f in sorted(files):
    print(f)
