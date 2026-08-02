module.exports = {
  '*.{ts,js,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{html,scss,css,json,md,yml,yaml}': ['prettier --write'],
};
