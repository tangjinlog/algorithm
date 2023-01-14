const hu = ['1', '22', '1233'];
let foodPlace = '';

function solution(food) {
    let foodAmount = food.splice(1);
    const hu = foodAmount.map((e,i)=> {
        const foods = `${Math.floor(e/2)}`;
        foodPlace += `${(i+1).toString()}`.repeat(foods);
        return foodPlace        
    })
    const answer = hu[hu.length-1]+ 0 +hu.splice(-1)[0].split('').reverse().join('')

    return answer
}
/**
 * 좀 더 간단하게 생각하자.
 * 스프레드 연산자를 적극 활용할 것.
 * 
 * 다른 분의 풀이
 * 
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}
 */