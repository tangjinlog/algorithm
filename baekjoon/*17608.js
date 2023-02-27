const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
let [N, arr] = [+input.shift(), input.map(x=>+x)]
const pop = +input.pop()
arr = [...input].reverse()
let max = pop;
let count = 1;
for(let i=0; i< N; i++){
  if(max < +arr[i]) {
    count++;
    max = +arr[i]
  }
}
console.log(count)

/**
 * stack
 */