const fs = require('fs')
let input = fs.readFileSync('test.txt').toString().trim()
let a,b,c = 0;

a = parseInt(input / 300)
input = input - 300 * a
b = parseInt(input / 60)
input = input - 60 * b
c = parseInt(input / 10)
input = input - 10 * c
input !== 0 ? console.log(-1) : console.log(a,b,c)



/**
 * 5min, 1min, 10sec
 */