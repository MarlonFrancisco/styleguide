SRC_PATH=${1:-"src"}
DIST_PATH=${2:-"dist"}

NODE_ENV=production babel $SRC_PATH \
  --root-mode upward \
  --out-dir $DIST_PATH \
  --ignore "**/{__tests__,*.spec.js,*.md}" \
  --copy-files \
  --extensions .ts,.tsx,.js,.jsx
