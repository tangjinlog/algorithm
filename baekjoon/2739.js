const fs = require('fs')
const input = fs.readFileSync('test.txt').toString();

for(let i=1; i<10; i++) {
  console.log(`${+input} * ${+i} = ${+input * i}`)
}
