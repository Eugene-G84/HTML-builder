const fs = require('node:fs/promises');
const path = require('node:path');

const folder = path.join(__dirname, 'files-copy');
const folderFilesPath = path.join(__dirname, 'files');

createCopyFolder();

async function createCopyFolder() {
  await fs.mkdir(folder, { recursive: true });
  await removeFiles();
  const files = await fs.readdir(folderFilesPath, 'utf8');

  for (const file of files) {
    const filePath = path.join(folderFilesPath, file);
    const destPath = path.join(folder, file);
    await fs.copyFile(filePath, destPath);
  }
}

async function removeFiles() {
  const oldFiles = await fs.readdir(folder, 'utf8');

  for (const file of oldFiles) {
    const destPath = path.join(folder, file);
    await fs.unlink(destPath);
  }
}

