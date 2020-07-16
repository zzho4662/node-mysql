// // 파일 하나 만들기
// const fs = require('fs')

// fs.writeFileSync('notes.txt', '안녕하세요')

// //appendFilesync

// fs.appendFileSync('notes.txt', '\n반갑습니다')

// validator 패키지 가져다 쓰기
const validator = require('validator')
let ret = validator.isEmail('abc@naver.com')
console.log(ret)
ret = validator.isURL('http://naver.com')
console.log(ret)

//1. chalk 패키지 설피
//2. app.js 파일에서 로딩
//. 문자열로 "Success!"락출력 녹색으로 출력하시오

const chalk = require('chalk')

console.log(chalk.green.bold.inverse("success!"))



