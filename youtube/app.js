const request = require('postman-request');
const connection = require('./mysql_connection')

let baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCliBbUywVIuykVNT1o-zxOCoRh2a20RVU&video&type=video&maxResults=7&regionCode=KR'

let url = baseUrl + '&q=Arsnal'

let encodedUrl = encodeURI(url)

request.get({url : encodedUrl , json:true}, function(error, response, body){

    let array = body.items

        let query = 'insert into youtube (videoId, title) values ?'
        let data = []
        // ?에 들어갈 데이터는  [ ]로 만들어야 합니다.
        for(let i = 0; i < array.length; i++){
            data.push  ([array[i].id.videoId,
                        array[i].snippet.title ])
        }
        console.log(data)
        connection.query(query, [data], function(error, results, fields){
                console.log(results)
            })
        connection.end()

})