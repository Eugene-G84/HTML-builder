const fs = require('node:fs');
const read = fs.createReadStream('text.txt', 'utf-8');
read.on('data', (chunk) => console.log(chunk));