const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', (line)=> {
  input.push(line)
  const x = +input[0];
  const y = +input[1];
  if(x > 0 && y > 0) console.log(1)
  else if(x > 0 && y < 0) console.log(4)
  else if(x < 0 && y > 0) console.log(2)
  else if (x < 0 && y < 0) console.log(3)
})
  .on('close', ()=> {
    process.exit();
  })

  /**
   * 런타임에러 EACCESS 형태의 접근권한 오류 때문에
   * readline 모듈을 사용해야한다.
   */