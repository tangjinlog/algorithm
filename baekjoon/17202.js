const fs = require('fs')
const [num1,num2] = fs.readFileSync('test.txt').toString().trim().split('\n')
let sum = '';
for(let i=0; i<num1.length; i++){
  sum += num1[i] +num2[i]
}
while(sum.length > 2) {
  let x = '';
  for(let i=0; i<sum.length-1; i++){
    z = +sum[i] + +sum[i+1]
    x += z % 10
  }
  sum = x
}
console.log(sum)