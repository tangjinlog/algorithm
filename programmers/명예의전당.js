const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
let arr = []
let answer = []
function solution(k, score) {
  for(let i=0; i<score.length; i++){
    arr.push(score[i])
    arr.sort((a,b)=>b-a)
    let newArr = arr.slice(0,k)
    answer.push(newArr[newArr.length-1])
  }
  return answer
}

solution(k, score)



/**
 * 내가 푼 풀이 - 내림차순 정렬, k번째만큼 짤라서 마지막요소 push
 * 다른 분의 풀이 - 오름차순 정렬, arr.shift()로 맨 앞 짜르고 push
 * 
function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}
 */
