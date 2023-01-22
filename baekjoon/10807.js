const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const target = input[2]
const result = input[1].split(' ').reduce((a,c)=>{
  c == target ? a++ : a;
  return a
},0)
console.log(result)