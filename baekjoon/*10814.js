const fs = require('fs')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
input.shift()

input = input.map(e=>e.split(' '))
input.sort((a,b)=>a[0] - b[0]).map(e=>console.log(e.join(' ')))

/**
 * sort 정렬 부분 조건 index
 */