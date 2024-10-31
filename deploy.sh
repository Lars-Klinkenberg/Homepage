git checkout gh-pages
git pull

# Variables
TARGET_BRANCH="gh-pages"
SOURCE_BRANCH="develop"

# Ensure the script stops on errors
set -e

# Fetch latest changes from the remote repository
git fetch origin

# Checkout the target branch
echo "Switching to $TARGET_BRANCH branch..."
git checkout $TARGET_BRANCH

# Pull the latest changes
echo "Pulling latest changes for $TARGET_BRANCH..."
git pull origin $TARGET_BRANCH

# Merge the source branch
echo "Merging $SOURCE_BRANCH into $TARGET_BRANCH..."
git merge $SOURCE_BRANCH

# Build the changes
echo "Building changes..."
ng build --output-path docs --base-href ./

# Move files
echo "Moving files..."
mv ./docs/browser/* ./docs/
cp ./CNAME ./docs/
cp ./docs/index.html docs/404.html

# commit and push
echo "Commiting..."
CURRENT_DATE=$(date "+%Y-%m-%d")
MESSAGE="deployment "
COMMIT_MESSAGE="$MESSAGE - $CURRENT_DATE"

git add .
git commit -m "$COMMIT_MESSAGE"

echo "Pushing..."
git push