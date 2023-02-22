const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const cutline = +input[0].split(' ')[1] - 1
const sortNum = input[1].split(' ').sort((a,b)=>b-a);
console.log(sortNum[cutline])