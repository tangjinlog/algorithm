const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
let count = [];
for(let i=0; i<10; i++){
  count.push(+input[i] % 42)
}
console.log(new Set(count).size)

/**
 * A, B(자연수)
 * 수 10개를 받고, 42로 나눈 나머지를 구한다음, 서로 다른 값의 개수를 구하라.
 */