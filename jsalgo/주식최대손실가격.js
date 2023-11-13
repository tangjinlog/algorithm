const data = [80000, 58000, 52700, 57700, 61100]

function solution(data) {
  let result = []
  for(let i=0; i<data.length; i++){
    for(let j=i+1; j<data.length; j++) {
      if(data[i] - data[j] > 0) {
        result.push(data[i] - data[j])
      } else {
        result.push(0);
      }
    }
  }
  result = Math.max(...result);

  return result
}
solution(data)