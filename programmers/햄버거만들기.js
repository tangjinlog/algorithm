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


// 2 = 1
// 3 = 2




/**
 * 1 = 빵
 * 2 = 야채
 * 3 = 고기
 * 포장은 무조건 1,2,3,1 이 모였을 때만 포장
 */