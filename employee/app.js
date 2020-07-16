// 네트워크를 통해서 다른 서버의 api를 호출하기 위해서

const request = require('postman-request');
const connection = require('./mysql_connection')

const baseUrl = "http://dummy.restapiexample.com/"

let path = "api/v1/employees"

request.get({url : baseUrl + path, json:true}, 
    function(error, response, body){
        let array = body.data

        let query = 'insert into employee (name, salary, age) values ?'
        let data = []
        // ?에 들어갈 데이터는  [ ]로 만들어야 합니다.
        for(let i = 0; i < array.length; i++){
            data.push  ([array[i].employee_name,
                        array[i].employee_salary,
                        array[i].employee_age])
        }
        console.log(data)
        connection.query(query, [data], function(error, results, fields){
                console.log(results)
            })
        connection.end()
                     
    })
// request.get({url : baseUrl + path, json:true}, 
//     function(error, response, body){
    
//         let array = body.data

//         let query = 'insert into employee (name, salary, age) values '
//         for(let i = 0; i < array.length; i++){
//         // let query = 'insert into employee(name, salary, age) \
//         // values ("'+body.data[0].employee_name+'", '+
//         // body.data[0].employee_salary+', '+
//         // body.data[0].employee_age+');'
//         query = query + `("${array[i].employee_name}",
//         ${array[i].employee_salary},
//         ${array[i].employee_age}),`
//         }
//         query = query.slice(0, -1)
        
//         connection.query(query, function(error, results, fields){
//             console.log(results)
//         })
//     connection.end()
// });