const fs = require('fs')
const input = +fs.readFileSync('test.txt').toString().trim()
let result = '';

for(let i=1; i<input+1; i++){
  if(i % 2 === 0) {
    result += `2 `;
  }
  else if(i % 2 === 1) {
    if(i === input) {
      result += `3`
    } else result += `1 `;
  }
}
console.log(result.trim())