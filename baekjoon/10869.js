const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().split(' ');
const a = Number(input[0])
const b = Number(input[1])
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(Math.floor(a / b))
console.log(a % b)