

function solution(number) {
  let count = 0;

  for(let i=0; i<number.length; i++) {
    for(let j=i+1; j<number.length; j++){
      for(let k=j+1; k<number.length; k++){
        number[i] + number[j] + number[k] == 0 ? count++ : null
      }
    }
  }
  return count
}
solution([-3, -2, -1, 0, 1, 2, 3])

/* 3개의 수를 더해 0을 만들면 삼총사.
3중 for문을 통해서 완전탐색
*/