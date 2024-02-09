import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const files = await glob('temp/**', { nodir: true });

files.forEach((file) => {
  const fullPath = path.resolve(file);

  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error(`Failed to delete ${fullPath}:`, err);
    } else {
      console.log(`${fullPath} deleted successfully.`);
    }
  });
});
