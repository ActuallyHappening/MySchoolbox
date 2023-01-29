# Increment patch version
python macro.py increment

npx tsc

# Build using rollup
rollup -c rollup.config.mjs


# Copy built content.js into ../Resources/content.js
# echo "Copying content.js & bundled.js into ../Resources"
# cp ./Build/content.js ../Resources/content.js

# Commit bundled.js
git add ./Build/bundled.js
git commit -m "devops(automated): Commiting built files Build/bundled.js"
git push