const fs = require('fs');

function mdLinks(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('file is not found');
      } else {
        const resultRegex = data.match(/\[(.*)\]\((.*)\)/g);
        const textLinkRegex = resultRegex.map(function(resul) {
          return {text: `${resul.match(/(?<=\[).+?(?=\])/g)}`,
            href: `${resul.match(/(?<=\().+?(?=\))/g)}`};
        });
        console.log(textLinkRegex);
        
        resolve(textLinkRegex);
      }
    });
  });
}

module.exports = mdLinks;
