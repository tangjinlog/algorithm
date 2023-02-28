const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
let [N, p] = [input.shift(), '']
let pNum = 0;
let result = []
for(let i=0; i<N; i++) {
  if(input[i] === '0' && p === '') {
    result.push('-1')
  }
  else if(input[i] !== '0') {
    pNum = input[i].split(' ').shift()
    p = input[i].split(' ').splice(1)
  }
  else if(input[i] === '0' && p !== '') {
    if(p.length !== 0) {
      result.push(p.shift())
      if(p.length === 0) {
        p = '';
        continue
      }
    }
  }
}
for(let i=0; i<result.length; i++){
  console.log(+result[i])
}
