const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n').splice(1);
let sum = '';
input.map(e=>{
  sum += +e.split(' ')[0] + +e.split(' ')[1] + '\n'
})
console.log(sum)


/**
 * 매 번 console.log()를 찍으면 시간초과.
 */