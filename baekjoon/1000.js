const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().split(' ');
const a = input[0]
const b = input[1]
console.log(Number(a)-Number(b))