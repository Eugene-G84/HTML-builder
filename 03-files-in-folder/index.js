const fs = require('node:fs/promises');
const path = require('node:path');

async function showInfoFiles() {
  const objfiles = await fs.readdir(path.basename('secret-folder'), { withFileTypes: true });
  let result = '';

  for (const file of objfiles) {
    if (!file.isDirectory()) {
      const fileName = file.name.slice(0, file.name.indexOf('.'));
      const extName = path.extname(file.name).slice(1);
      const fileStat = await fs.stat(path.join(path.basename('secret-folder'), file.name));
      const fileSize = `${fileStat.size}b`;
      result += `${fileName} - ${extName} - ${fileSize}\n`;
    }
  }

  return console.log(result);
}

showInfoFiles();
