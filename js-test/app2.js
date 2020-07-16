//다른 파일에 있는 정보를 가져오는 방법
const utils = require('./utils.js')
// ./라는 뜻은 현재의 파일인 app2.js가 있는 디렉토리

let sum = utils.add(4, -2)
// utils.js 파일 안에 있는 name값을 사용하려 한다.

console.log(sum)

//새로운 파일 notes.js 라고 만듭니다
// getNotes 라는 함수를 만들고
//이함수는 "Hello ~"를 리턴하는 함수입니다.
//app2.js에서 이 함수를 불러아서 콘솔에 로그 찍으세요

console.log(utils.name)
console.log(utils.minus(10, 1))

const getNotes = require('./notes.js')

let note = getNotes()

console.log(note)


