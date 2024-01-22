const fs = require('node:fs');
const path = require('node:path');

const filesPath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(bundlePath, {}, 'utf- 8');

fs.readdir(filesPath, { withFileTypes: true }, (err, files) => {
  for (const file of files) {
    if (file.isFile() && path.extname(file.name) === '.css') {
      const readStream = fs.createReadStream(path.join(filesPath, file.name), 'utf-8');
      readStream.on('data', (chunk) => writeStream.write(chunk));
    }
  }
});
