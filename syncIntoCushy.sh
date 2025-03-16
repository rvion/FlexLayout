# send with rsync the whole src/ folder into /Users/loco/dev/CushyStudio/src/FlexLayout/
rsync -avz --delete --exclude-from 'rsync-exclude.txt' src/ /Users/loco/dev/CushyStudio/src/FlexLayout/
rsync -avz --delete --exclude-from 'rsync-exclude.txt' style/ /Users/loco/dev/CushyStudio/src/FlexLayout/style
rsync LICENSE /Users/loco/dev/CushyStudio/src/FlexLayout/LICENSE
rsync .prettierrc.json /Users/loco/dev/CushyStudio/src/FlexLayout/.prettierrc.json
echo "Synced with CushyStudio"