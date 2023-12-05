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
    const rest = [...origin.slice(0,idx),...origin.slice(idx + 1)];
    // console.log(fixed,rest,idx,num)
    const combinationsArr = combinations(rest,num -1);
    const attached = combinationsArr.map(v => [fixed, ...v]);
    results.push(...attached);
  })
  return results;
}
let a = combinations([1,2,3,4,5],3)
// console.log(a)


function combinations(arr,num) {
  const results = [];
  if(num === 1) return arr.map(v=>[v])
  arr.forEach((fixed,idx,origin) => {
    const rest = [...origin.slice(0,idx),...origin.slice(idx + 1)];
    // console.log(fixed,rest,idx,num)
    const combinationsArr = combinations(rest,num -1);
    const attached = combinationsArr.map(v => [fixed, ...v]);
    results.push(...attached);
  })
  return results;
}
let b = combinations([1,2,3,4,5],3)
// console.log(b)


let set = new Set();
numOfCase([1,7],'')
function numOfCase(arr,str) {
	if(arr.length) {
    	for(let i = 0; i <arr.length; i++) {
        	let copy = [...arr];
            console.log(copy, i,str , arr[i])
          	copy.splice(i,1);
          	numOfCase(copy,str + arr[i])
        }
    }
  	if(str > 0) set.add(Number(str))
    console.log(set)
}
console.log(Array.from(set))  // [17, 1, 71, 7]

//첫 호출 -> 포문 진입 ->  재귀 -> 반복 -> 기저사례return