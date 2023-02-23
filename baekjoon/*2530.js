const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
let time = +input[1]
let h = +input[0].split(' ')[0]
let m = +input[0].split(' ')[1] 
let s = +input[0].split(' ')[2]

let sum = s+time
m= m+ parseInt(sum/60)
sum%=60
h = h+ parseInt(m/60)
m%=60
h%=24
console.log(h,m,sum)
// nh = parseInt((h * 60 * 60+ (m * 60) + time) / 60 / 60)
// nm = parseInt((h* 60 * 60+ (m * 60)+ time) / 60 % 60)
// ns = parseInt((h* 60 * 60+ (m * 60)+ time) /60 / 60 % 60)

/**
 * 기준(초)를 먼저 더해서 sum을 만들고 위로 올라가는 식
 */