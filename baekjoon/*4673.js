function solution(N) {
    function d(num) {
        let result = num;
        const numToArr = result.toString().split('')
        for(let i=0; i<numToArr.length; i++){
            result += +numToArr[i]
        }
        return result
    }
    const testArr = [0,0];
    let result = '';
    for(let i=0; i<N; i++){
        testArr[d(i)] = 1;
        if(testArr[i] != 1) result += i + '\n'
    }
    return console.log(result)
}
solution(10000)

/**
 * 39는 51의 생성자이다
 * 생성자가 없는 수를 셀프 넘버라고 한다
 * 1~10000 구하라
 * 
 * 배열을 만들고 인덱스 값을 d(n)함수를 통해 리턴받은 수로 정하고
 * testArr[d(n)] = 1로 기본 설정 (생성자가 있는 수)
 * 이 수를 제외시키고
 * 해당 인덱스의 값이 1이 아닌 수만 출력
 */

// d(2), i=2
// [0,1,0,0,1]
// d(3), i=3
// [0,1,0,0,1,0,1]