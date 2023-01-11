let divisor = 0;
let totalCount = 0;

function solution(number, limit, power) {
  for(let i=1; i<=number; i++) {
    let arr = [];
    const sqrt = parseInt(Math.sqrt(i));
    for(let j=1; j<=sqrt; j++){
      if(i % j == 0) {
        arr.push(j);
      }
    }
    arr.map(e=>arr.push(i/e))
    divisor = [...new Set(arr)].length;
    if(divisor <= limit) {
      totalCount += divisor;
    } else {
      totalCount += power;
    }
    divisor = 0;
  }
  return totalCount;
}
solution(10,3,2)


/**
 * 시간 복잡도를 고려한 최적의 약수 찾기
 * n의 약수 구하기
 * 1부터 n의 제곱근까지의 수만 0으로 나누어 떨어지는지 확인한다.
 * 이 결과를 가지고 n을 결과로 한 번씩 나눈다.
 * 중복을 제거하고 오름차순으로 정렬한다.
 * 끝
 * 
 * 다른 분의 풀이
 * function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}
 * 
*/