const request = require('postman-request');

const baseUrl = "http://api.weatherstack.com/"

let queryUrl = baseUrl +
                'current?access_key=f58d37cef93314c1ab5267bd3c27495e' +
                '&query='

let query = 'seoul'

request.get({url : queryUrl + query, json:true}, function(error, respone, body){
    console.log(respone.statusCode)
   // console.log(body)
   console.log(body.current.temperature)
})