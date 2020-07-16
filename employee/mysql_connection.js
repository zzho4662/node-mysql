// mysql db에 접속할수있는 커넥션을 여기서 하나 만들어 놓고
// 다른 파일에서 가져다 쓸수있게 한다.
const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'database-1.cydwkhu45sby.ap-northeast-2.rds.amazonaws.com',
    user     : 'node_user',
    database : 'my_test',
    password : 'node1234'
})

// 다른 파일에서 aws 커넥션 사용할 수 있도록
module.exports = connection

















