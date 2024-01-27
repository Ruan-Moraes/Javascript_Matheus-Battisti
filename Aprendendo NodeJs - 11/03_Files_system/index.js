const { readFile, writeFile } = require('fs');

readFile('arquivo.txt', 'utf-8', (error, content) => {
  if (error) {
    throw error;
  } else {
    console.log(content);
  }
});

setTimeout(() => {
  writeFile('arquivo.txt', 'Texto escrito', (error) => {
    if (error) {
      throw error;
    }
  });
}, 2 * 1000);

setTimeout(() => {
  readFile('arquivo.txt', 'utf-8', (error, content) => {
    if (error) {
      throw error;
    } else {
      console.log(content);
    }
  });
}, 8 * 1000);
