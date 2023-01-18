let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
let count = 0;
function solution(ingredient) {
  const HamburgerPattern = '1231'
  for(let i=0; i<ingredient.length; i++) {
    const patternToString = ingredient.join('');
    if(patternToString.indexOf(HamburgerPattern) !== -1) {
      ingredient.splice(patternToString.indexOf(HamburgerPattern), 3);
      count++;
    }
    else break
  }
  console.log(count)
  return count;
}
solution(ingredient);


/**
 * 1 = 빵
 * 2 = 야채
 * 3 = 고기
 * 포장은 무조건 1,2,3,1 이 모였을 때만 포장
 * 
 * 내 풀이 = 실패 splice를 쓴건 좋았으나 indexOf가 아니라 그냥 for문 일치만 했었어야 함
 * 
 * 다른 분의 풀이 1.
 * 
function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}
  * 다른 분의 풀이 2.

function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        if (
            stk[stk.length-1] === 1 &&
            stk[stk.length-2] === 3 &&
            stk[stk.length-3] === 2 &&
            stk[stk.length-4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
}
 * 
 */