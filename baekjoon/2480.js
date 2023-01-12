const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split(' ');
const equalCount = [... new Set(input)]

if( equalCount.length === 1 ) {
  console.log(10000 + +equalCount[0] * 1000)
}
else if( equalCount.length === 2 ) {
  console.log(1000 + +input.filter((e,i)=>input.indexOf(e) !== i)[0] * 100)
}
else {
  console.log(+Math.max(...equalCount) * 100)
}
/**
 * 같은 눈 3개 일치 = 10000 + 눈 * 1000
 * '' 2개 일치 = 1000 + 눈 * 100
 * 모두 다르면 ? 그 중 가장 큰 눈 * 100
 * 
 * 내가 푼 방법
 * 중복 제거 - new Set()
 * 중복 찾기 - filter() + indexOf()
 */