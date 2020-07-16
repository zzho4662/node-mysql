// const connection = require('./app.js')

// let query = 'select * from memo'

// connection.query(query, function(error, results, fields){
//     console.log(results)
// })

// let query = 'select s.first_name, p.title, p.grade \
// from students as s \
// join papers as p \
// on s.id = p.student_id \
// order by p.grade desc;'

// connection.query(query, function(error, results, fields){
//     console.log(results)
// })

// let query = 'select s.first_name, p.title, p.grade \
// from students as s \
// left join papers as p \
// on s.id = p.student_id;'

// connection.query(query, function(error, results, fields){
//     console.log(results)
// })

// let query = 'select s.first_name, ifnull(p.title, "MISSING"), ifnull(p.grade, 0) \
// from students as s \
// left join papers as p \
// on s.id = p.student_id;'

//  connection.query(query, function(error, results, fields){
//      console.log(results)
//  })

//  let query = 'select s.first_name as first_name, ifnull(avg(p.grade), 0) as average, \
//  case \
//      when avg(ifnull(p.grade,0)) >=80 then "PASSING" \
//      else "FAILING" \
//      end as passing_status \
//  from students as s \
//  left join papers as p \
//  on s.id = p.student_id \
//  group by s.first_name \
//  order by avg(p.grade) desc;'
 
//   connection.query(query, function(error, results, fields){
//       console.log(results)
//   })
const connection = require('./app.js')

  let query = 'select s.title as title, r.rating as rating \
  from series as s \
  join reviews as r \
  on s.id = r.series_id;'
  
   connection.query(query, function(error, results, fields){
       console.log(results)
   })
   
connection.end()


