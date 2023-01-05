const s = 'foobar';

function solution(s) {
  const arr = [];
  const input = s.split('');
  input.map((e,i)=>{
    if(input.lastIndexOf(e,i-1) === 0 || input.lastIndexOf(e,i-1) === -1) {
      arr.push(-1);
    }
    else {
      arr.push(i - input.lastIndexOf(e,i-1))
    }
  })
  return arr
}
solution(s)

/** 
 * 다른분의 풀이
 * 순서를 생각하고 삼항연산자를 이용해보자.
 * 
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
*/