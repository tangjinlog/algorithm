//입력값으로 2차원 배열이 주어질 때, 나머지 한 점의 좌표를 리턴하라



function solution(arr) {
  console.log(arr)
  let res = [0,0]
  
  const xArr = arr.map(e=>e[0])
  const yArr = arr.map(e=>e[1])

  const xLen = xArr.filter((e,_,origin)=>origin[0] === e).length
  const yLen = yArr.filter((e,_,origin)=>origin[0] === e).length

  좌표구하기(xLen,xArr,0)
  좌표구하기(yLen,yArr,1)

  function 좌표구하기(len,arr,order){
      if(len === 1) {
        res[order] = arr[0]
      } else {
        res[order] = arr.filter((e,_,origin)=>origin[0] !== e)[0]
      }
  }

  return res
}


console.log(solution([[1,4],[3,4],[3,10]]))