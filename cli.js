#! /usr/bin/env node
const path = process.argv.slice(2);
const mdLinks = require('./lib/index.js');

mdLinks(path[0])
 .then((result) => console.log(result) )
 .catch((error) => console.log(error))