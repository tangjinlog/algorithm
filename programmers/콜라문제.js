function solution(a,b,n) {
  let cola = 0;
  while(n >= a) {
    cola += parseInt(n / a) * b
    n = parseInt((n / a)) * b + n % a
  }
  return cola
}

solution(3,1,13);
/**
 * a = 콜라를 받기 위해 마트에 주어야 하는 빈 병 수 
 * b = a개를 마트에 갖다주면 받는 콜라 병 수
 * n = 상빈이가 가지고있는 빈 병 수
 * n개의 빈병으로 받을 수 있는 콜라의 개수를 구하라
 * 
 * 다른 분의 풀이
 * 어떻게..
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b

 */