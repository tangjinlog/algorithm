const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const totalPrice = input.shift();
let compareTotalPrice = 0;
input.shift()
input.map(e=>{
  compareTotalPrice += +e.split(' ')[0] * +e.split(' ')[1]
})
console.log(totalPrice == compareTotalPrice ? 'Yes' : 'No')