const cssnano = require('cssnano');
var safeImportant = require('postcss-safe-important');

module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    safeImportant(),
  ],
};
