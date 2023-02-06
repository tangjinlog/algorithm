const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const sortNum = input.sort((a,b)=>a-b)
const result = []
for(let i=1; i<=30; i++){
  sortNum.indexOf(i.toString()) == -1 ? result.push(i.toString()) : null
}
console.log(`${result[0]}\n${result[1]}`)


/* 정렬시키고, 검사 */