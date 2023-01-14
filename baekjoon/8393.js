const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim()
let totalCount = 0;
for(let i=1; i<=input; i++) {
  totalCount += i;
}
console.log(totalCount)