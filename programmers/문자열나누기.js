const s = 'banana'

function solution(s) {
  let a = '';
  let aCount = 0;
  let bCount = 0;
  let totalCount = 0;

  for(let c of s) {
    if(!a) a = c;
    if(a == c) aCount++;
    else bCount++;
    if(aCount == bCount) {
      totalCount++;
      a = '';
      aCount = 0;
      bCount = 0;
    }
  }
  if(a) totalCount++;
  return totalCount
}

solution(s)
/**
 * for of 문으로 하나씩 돌면서 문자열을 담는데,
 * 초깃값을 고정해주기 위해 a라는 변수에 처음 ''를 할당.
 */