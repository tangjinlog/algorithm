//히스토그램 직사각형 최대넓이 구하기
//https://www.acmicpc.net/problem/6549
//분할정복

const fs = require('fs')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
input = input.slice(0,-1);
input.map(e=>{
  const [len, ...heightList] = e.split(' ').map(e=>Number(e))
  const result = getResult(heightList,0,len-1)
  console.log(result);
})

function getResult(heightList,left,right) {
  //기저 사례: 직사각형이 하나일 경우 해당 높이 리턴
  if(left === right) {
    return heightList[left];
  }
  //왼쪽, 오른쪽 분할 비교
  let mid = Math.floor((left + right) / 2);
  let result = Math.max(getResult(heightList,left,mid),getResult(heightList,mid+1,right))
  //가운데 2블록 넓이 비교
  let low = mid,high = mid+1
  let minHeight = Math.min(heightList[low],heightList[high])
  result = Math.max(result,  minHeight * 2);

  while(left<low || high<right) {
    if(high < right && (left === low || heightList[low-1] < heightList[high+1])) {
      high++;
      minHeight = Math.min(minHeight, heightList[high]);
    } else {
      low--;
      minHeight = Math.min(minHeight, heightList[low])
    }
    result = Math.max(result, minHeight * (high - low +1))
  }

  // console.log(mid,right, result)

  return result
}




