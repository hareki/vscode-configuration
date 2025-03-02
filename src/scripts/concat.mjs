import concat from 'concat';
import { glob } from 'glob';
import path from 'path';

const files = await glob('temp/*.css', { ignore: 'node_modules/**' });
const sortedFiles = files.sort((a, b) => {
  return path.basename(a).localeCompare(path.basename(b));
});

concat(sortedFiles, 'dist/styles/compiled.css')
  .then(() => {
    console.log('All files were concatenated into dist/styles/compiled.css');
  })
  .catch((err) => {
    console.error('Error during concatenation:', err);
  });
