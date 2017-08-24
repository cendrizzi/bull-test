let fs = require('fs');
let ini = require('ini');
let path = require('path')

let config = ini.parse(fs.readFileSync(path.join(__dirname, '../config.ini'), 'utf-8'));

module.exports = config;
