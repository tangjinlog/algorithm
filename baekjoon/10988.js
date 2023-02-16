const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('')
const arr1 = input
const res = arr1.every((e,i)=>e === arr1.reverse()[i]) 
console.log(res ? 1 : 0)
/**
 * 팰린드롬인지 확인하기
 * level, noon
 * arr.reverse()는 원본 배열을 변경한다
 */