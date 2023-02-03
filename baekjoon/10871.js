const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const testCount = input[0].split(' ')[1]
const result = input[1].split(' ').reduce((a,c)=>{
  +c < +testCount ? a.push(c) : null
  return a
},[])
console.log(result.join(' '))
