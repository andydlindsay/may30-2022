const fs = require('fs');

fs.readFile('./sample.html', { encoding: 'utf-8' }, (err, fileContents) => {
  // error checking
  if (err) {
    return console.log('err', err);
  }

  // happy path
  console.log('1. file contents async', fileContents.length);
});

const fileContents = fs.readFileSync('./sample.html', { encoding: 'utf-8' });
console.log('2. file contents sync', fileContents.length);
