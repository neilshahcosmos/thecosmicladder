#!/usr/bin/env bash
set -euo pipefail
cd ~/thecosmicladder
npm run generate
sudo rsync -a --delete --chmod=D755,F644 .output/public/ /var/www/thecosmicladder/
echo "Deployed."
