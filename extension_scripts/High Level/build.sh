npx tsc

# Build bundle.js
rollup ./bundle.js -o ./bundled.js --format iife --name "bundled"

# Build using rollup
# rollup -c rollup.config.mjs


# Or copy manually content.js into ../Resources/content.js
echo "Copying content.js into ../Resources"
cp content.js ../Resources/content.js

git commit -am "devops(automated): Commiting built files"
git push