const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
input.shift()
const filteredOx = input.map(e=>e.split('X').filter(e=>e!=''))
filteredOx.map((e)=>{
  let point = 0;
  e.forEach(e=>{
    let count = e.length;
    point += count*(count+1)/2
  })
  return console.log(point)
})

/**
 * OX Quiz
 * 예시 : OOXXOXXOOO
 * O의 점수 계산 : 연속된 O의 개수만큼 + 1
 * 
 * 1 ~ n 까지의 합
 * - 0 부터 n 까지 더하기
 * - n(n+1)/2 시간복잡도에서 유리
 */