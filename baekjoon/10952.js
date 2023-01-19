const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
input.pop();
input.map(e=>{
  console.log(+e.split(' ')[0] + +e.split(' ')[1])
})