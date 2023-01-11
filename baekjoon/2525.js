const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')

let H = +input[0].split(' ')[0]
let M = +input[0].split(' ')[1]
const time = +input[1];

H = parseInt((H * 60 + M + time) / 60);
M = parseInt((H * 60 + M + time) % 60)
H >= 24 ? H -= 24 : H;

console.log(`${H} ${M}`)


/**
 * 시간 문제는 분으로 통일하고 계산하자...
 */