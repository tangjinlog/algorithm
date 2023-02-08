const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const fixing = input[1].split(' ')
const maxScore = Math.max(...fixing)
let average = 0;
fixing.map(score=> average += score/maxScore * 100)
console.log(average / fixing.length)


/**
 * 세준이 -> 기말 망침 -> 점수 조작
 * 과목중 최고점수 = M
 * 조작 = 과목점수 / M * 100
 * 새로운 평균을 구하라.
 */
