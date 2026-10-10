cd ~/thecosmicladder
npm run build
sudo rsync -a --delete dist/ /var/www/thecosmicladder/
