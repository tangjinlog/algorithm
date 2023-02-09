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

// /**
//  * 39는 51의 생성자이다
//  * 생성자가 없는 수를 셀프 넘버라고 한다
//  * 1~10000 구하라
//  */

// 4
// [0,1,0,0,1]
// 3
// [0,1,1,]
//1
// [0,0,1,0,1,0,1]

// function d(n) {
//     let result = n;
//     let resm = n.toString().split('');
//     console.log(resm)
//     for (let i = 0; i < resm.length; i++) {
//         result += parseInt(resm[i])
//     }

//     return result;
// }

// console.log(d(2))

// console.log(n.toString().split(''))