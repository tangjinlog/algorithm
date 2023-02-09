const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
input.shift()
input.map(e=>{
  const newArr = e.split(' ');
  let sum = 0;
  let gteCount = 0;
  let student = newArr.shift()
  newArr.map(e=>sum += +e)
  let average = sum / student
  for(let i=0; i<newArr.length; i++){
    +newArr[i] > average ? gteCount++ : null
  }
  console.log(((gteCount / student)* 100).toFixed(3) + '%')
})


/**
 * 대학생 새내기 90%는 자신이 평균은 넘는다고 생각. 슬픈 진실을 알려주자
 * 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림해서 소수점 셋째 자리까지 출력하라
 * 카운트 = 점수 > 평균
 */