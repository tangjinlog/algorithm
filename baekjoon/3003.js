const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split(' ').map(value=>+value);
const chess = [1, 1, 2, 2, 2, 8];
const result = [];

for(let i=0; i<input.length; i++){
  result.push(chess[i] - input[i]);
}
console.log(result.join(' '))