const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim()
const changeArr = [500, 100, 50, 10, 5, 1];
let pay = 1000 - +input;
let count = 0;

  for(let i=0; i<changeArr.length; i++){
    if (pay % changeArr[i] !== 0) {
      count += Math.floor(pay / changeArr[i]);
      pay = pay % changeArr[i]
      
    }
    else if (pay % changeArr[i] === 0) {
      count += Math.floor(pay / changeArr[i])
      pay = 0;
      break
    }
  }
console.log(count)

// 처음 while문을 왜썻지.. 
// 그냥 동전 개수만큼만 for문 돌리면 됨