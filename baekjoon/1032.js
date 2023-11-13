const fs = require('fs')
const [N, ...inputArr] = fs.readFileSync('test.txt').toString().trim().split('\n')
const str = inputArr[0].split('')
const str2 = inputArr[1].split('');
const strLength = str.length;
const result = [];


console.log(...inputArr)

// for(let i=0; i<strLength; i++){
//   str = inputArr[0][i]
//   inputArr.map(e=>{
//     e[i]

//   })
// }
  for(let i=0; i<strLength; i++){
    str[i].indexOf(str2[i]) !== -1 ? result.push(str2[i]) : result.push('?')
  }
// console.log(result)

// const newArr = inputArr.map((e,i)=> {
//   return e
//   // for(let j=0; j<e.length; j++){
//   //   str = e[j]
//   // }
// })
// // e[i], e[i+1]
// console.log(newArr)