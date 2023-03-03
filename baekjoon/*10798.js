const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().split('\n')
const max = Math.max(...input.map(e=>e.length))
let col = '';

for(let i=0; i<max; i++){
  for(let j=0; j<input.length; j++){
    col += input[j][i] || '';
  }
}
console.log(col)