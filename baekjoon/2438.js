const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim();
for(let i=1; i<=+input; i++) {
  console.log('*'.repeat(i))
}