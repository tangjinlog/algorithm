const fs = require('fs')
let input = fs.readFileSync('test.txt').toString().trim()
let initialCount = +input;
let sum = 0;
let count = 0;
while(true) {
  count++;
  sum = Math.floor(input / 10) + input % 10;
  sum = (input % 10) * 10 + sum % 10
  input = sum
  if(sum == initialCount) break
}
console.log(count)


/**
 * 0 <= x <= 99
 * 
 * 첫 x < 1 => 0을 앞에 붙여 두자리로 만들고 각 자리의 숫자를 더한다.
 * 
 * 1의 자리 수 구하기 = num % 10
 * 10의 자리 수 구하기 = num / 10
 * 1의 자리수를 10의 자리 수로 바꾸기 = (num % 10) * 10
 * 
 * 내가 푼 풀이 = 못 품
 * 
 * 다른 사람의 풀이
 * 
 * 
 * let input = Number(require('fs').readFileSync('/dev/stdin').toString());
 * let num = input;
  let sum;
  let i = 0;

  while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
      break;
    } 
  }

  console.log(i);
 */