// const data = [3, '연어','참치'];
const data = [3, '연어','참치'];

// function solution(data){
// 	if(data.toString() == [0,'']) '기본 포케가 제공됩니다.'
//     let toping = ['연어','참치','닭가슴살','베이컨','버섯']
//     let [len, ...topings] = data.map(e=>e);
//     // if(topings.filter(e=>e).toString() == []) return console.log(combinations(toping,len))
//     let t = toping.join(',')
    
//     let s = toping.filter(e=> {
//       return !topings.includes(e);
//     })
//     console.log(s)

//     let total = t.split(',').filter(e=>e)
//     const res = combinations(total,len-topings.length)
//     let r = res.map(e=>{
//       return topings.concat(e)
//     })
//     // console.log(r)

//     return r
// }
// solution(data);

function combinations(arr,num) {
  const results = [];
  if(num === 1) return arr.map(v=>[v])
  arr.forEach((fixed,idx,origin) => {
    const rest = origin.slice(idx + 1);
    const combinationsArr = combinations(rest,num -1);
    console.log(combinationsArr)
    const attached = combinationsArr.map(v => [fixed, ...v]);
    results.push(...attached);
  })
  return results;
}
console.log(combinations([1,2,3,4,5],5))