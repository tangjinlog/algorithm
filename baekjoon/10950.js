const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n').splice(1)
const a = input.map(e=>{
  console.log(+e.split(' ')[0] + +e.split(' ')[1])
})