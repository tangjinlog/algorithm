const t = '3141592';
const p = '271';

let arr = []
function solution(t, p) {
  const tLength = t.length;
  const pLength = p.length;
  for(let i=0; i<tLength-pLength+1; i++) {
    arr.push(t.slice(i,pLength+i));
    console.log(arr)
  }
  const answer = arr.filter(e=>e<=p).length;
  return answer
}

solution(t,p)

/**
 * 암묵적 형변환에 대해 생각해볼 것.
 * '123' < '456'
*/