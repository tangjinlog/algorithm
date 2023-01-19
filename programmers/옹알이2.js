function solution(babbling) {
    let count = 0;
    const test = ['ayaaya','yeye','woowoo','mama'];
    for(let i=0; i<babbling.length; i++){
      while(babbling.length) {
        let word = babbling.pop();
        if(test.some(e=>word.includes(e))) continue;
        word = word.replaceAll('aya',1).replaceAll('ye',2).replaceAll('woo',3).replaceAll('ma',4);
        word = word.replace(/[1234]/g, '');
        if(word.length === 0) count ++;
      }
    }
    return count;
}
solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])
/**
 * aya, ye, woo, ma
 * 중복은 x
 * 
 * 못 품
 * 정규표현식을 생각하자.
 * 
 * 다른 분의 풀이
 * 

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}

 */