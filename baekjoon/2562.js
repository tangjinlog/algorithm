const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const maxNum = Math.max(...input)
let count = 0;
input.forEach((e,i)=>{
  +e === maxNum ? count = i+1 : null
})
console.log(`${maxNum}\n${count}`)