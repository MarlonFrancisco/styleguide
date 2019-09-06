SRC_PATH=${1:-"src"}    #set VARIABLE with the value of 1st Arg to the script,
DIST_PATH=${2:-"dist"}    #set VARIABLE with the value of 1st Arg to the script,

NODE_ENV=production babel $SRC_PATH \
  --root-mode upward \
  --out-dir $DIST_PATH \
  --ignore "**/{__tests__,*.spec.js,*.md}" \
  --ignore "$DIST_PATH/**/*" \
  --copy-files \
  --extensions .ts,.tsx,.js,.jsx
