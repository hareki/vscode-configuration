const fs = require('fs');
const path = require('path');
const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
  },
};
