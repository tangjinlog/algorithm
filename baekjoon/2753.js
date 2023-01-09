const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim();

if( +input % 4 === 0 && +input % 400 === 0) console.log(1)
else if( +input % 4 === 0 && +input % 100 != 0) console.log(1)
else console.log(0)

/**
 * 4의 배수이면서 100의 배수가 아닐때 혹은 400배수일 때 윤년
 */