const fs = require('node:fs');
const path = require('path');

const fileStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
fileStream.on('data', (chunk) => console.log(chunk));