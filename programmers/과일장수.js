const score =  [1, 2, 3, 1, 2, 3, 1]
// let total = 0;
// function solution(k, m, score) {
//     for(let i=0; i<score.length; i++){
//       for(let j=0; j<score.length-i-1; j++) {
//         if(score[j] < score[j+1]) {
//           const temp = score[j+1];
//           score[j+1] = score[j];
//           score[j] = temp;
//         }
//       }
//     }
//     const division = score.length/m
//     for(let i=0; i<division; i++){
//       if(score.length >= m) {
//         total += Math.min(...score.splice(0,m)) * m;
//       }
//       console.log(total)
//     }
    
//     return total
// }


let total = 0;
function solution(k, m , score) {
  const division = Math.floor(score.length/m);
  score.sort((a,b)=>b-a)
  let idx = m-1;
  for(let i=0; i<division; i++){
    total += score[idx] * m;
    idx += m;
  }
  console.log(total)
  return total
}

solution(3,4,score)



/**
 * score - 사과 개수
 * m - 한 상자 사과 개수
 * k - 최고 등급
 * 이익이 발생하지 않을 경우 0 return
 * 
 * 내가 푼 풀이
 * score 오름차순 정리
 * m 만큼 slice
 * 최저점 * m 
 * 이것들을 다 더함.
 * -> 시간초과 실패
 * 그래서 splice로 실제로 자르지말고 idx로 자르는 것처럼 다시 품
 * 
 * 
 * 다른 분의 풀이
 * solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m
 * 경이로움
 * 오름차순이든 내림차순이든 중요하지않고 m 개수 만큼 필터로 자르고, reduce로 누산해서 한 줄로 끝
 */