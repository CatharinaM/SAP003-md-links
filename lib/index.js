const fs = require('fs');

function mdlinks(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const resultRegex = data.match(/\[(.*)\]\((.*)\)/g);
                const textLinkRegex = resultRegex.map(function (resul) {
                    return { text: `${resul.match(/(?<=\[).+?(?=\])/g)}`, href: `${resul.match(/\(([^\)(]+)\)/g)}` }
                })
                resolve(textLinkRegex)
            }
        })
    })
}

module.exports = mdlinks;




















