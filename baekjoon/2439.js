const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim();
for(let i=0; i<+input; i++){
  console.log(' '.repeat(+input-i-1)+ '*'.repeat(i+1))
}