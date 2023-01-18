const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
input.shift();
input.map((e,i)=>{
  console.log(`Case #${i+1}: ${+e.split(' ')[0]} + ${+e.split(' ')[1]} = ${+e.split(' ')[0] + +e.split(' ')[1]}`)
})