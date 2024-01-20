const fs = require('node:fs');
const process = require('node:process');
const readline = require('node:readline');

const writeFile = fs.createWriteStream('text.txt', { flags: 'a' }, 'utf-8');
const interface = readline.createInterface(process.stdin, process.stdout);

console.log('Write the text');

interface.on('line', (data) => {
  if (data === 'exit') {
    console.log('Goodbye');
    process.exit();
  }

  writeFile.write(`${data}\n`);
})

interface.on('SIGINT', () => {
  console.log('Goodbye');
  process.exit();
});
