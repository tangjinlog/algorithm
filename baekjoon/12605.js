const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const [N, word] = [input.shift(), input]
let result = '';

for(let i=0; i<N; i++){
  let newWord = word[i].split(' ');
  for(let j=0; j<word[i].split(' ').length; j++) {
    result += `${newWord.pop()} `
  }
  console.log(`Case #${i+1}: ${result}`)
  result = '';
}