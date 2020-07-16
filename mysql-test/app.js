const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'database-1.cydwkhu45sby.ap-northeast-2.rds.amazonaws.com',
  user     : 'node_user',
  database : 'my_test',
  password : 'node1234'
  
});

module.exports = connection