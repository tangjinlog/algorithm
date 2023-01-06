const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split(' ');
const a = +input[0]
const b = +input[1]

if(a > b) console.log(`>`)
else if(a < b) console.log(`<`)
if(a == b) console.log(`==`)