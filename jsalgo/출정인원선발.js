// 30% 이하로 선발인원 정하기
// 알파벳 역순으로 출력

function solution(data) {
    let toPick = parseInt(data.length * 0.3);
    if(toPick === 0) return []
    let obj = {};
    let ans = [];
    let pick = 0;
    for(let i of data) {
     let sum = i.slice(1).reduce((x,y)=>x+y,0);
     if(sum in obj) {
         obj[sum].push(i[0]);
     } else {
         obj[sum] = [i[0]]
     }
    }
    obj = Object.entries(obj);
    obj.sort((a,b)=>b[0] - a[0]);
    for(let i of obj) {
        if(pick < toPick && i[1].length <= toPick) {
            ans.push(...i[1])
            pick += i[1].length;
        } else if(i[1].length > toPick) {
         	return ans   
        }
    }
    ans.sort().reverse();
    return ans
}
console.log(solution([['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]]))