const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim();
console.log(input)
if(+input >= 90) console.log('A')
else if(80 <= +input && +input < 90) console.log('B')
else if(70 <= +input && +input < 80) console.log('C')
else if(60 <= +input && +input < 70) console.log('D')
else console.log('F')