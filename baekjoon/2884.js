const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split(' ');

let H = +input[0];
let M = +input[1];

if(M < 45 && H != 0) {
  H = H-1;
  M += 60 - 45;
}
else if(M < 45 && H == 0) {
  H = 23;
  M += 60 -45;
}
else if(M >= 45) {
  M -= 45;
}
console.log(`${H} ${M}`)


/**
 * 45분 으로 고쳐라. 0:0 ~ 23:59분
 * input : 10 10 - > 9 25
 * 
 * 조건 1. M < 45 && H != 0 ? H-1 , (M + 60) - 45
 * 조건 2. M < 45 && H == 0 ? H = 23 , (M + 60) - 45
 * M >= 45 ? M - 45
 */