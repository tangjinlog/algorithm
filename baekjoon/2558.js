const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const a = input[0]
const b = input[1].split('')
console.log(a * b[2])
console.log(a * b[1])
console.log(a * b[0])
console.log(+(a*b[0]+'00')+(+(a*b[1]+'0')+(a*b[2])))

/**
 * a 에 b의 각 자리수를 곱한다 . == 1번 해결
 * length * a , length -1 * a , length-2 
 * l
 */