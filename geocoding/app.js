const request = require('postman-request');

let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/화곡역.json?access_token=pk.eyJ1IjoibW9sbzFmb3VyIiwiYSI6ImNrY214d3EyczA1cmsyc3FyYjhiNzVneGYifQ.7HmOukPgvQBL3CFhqgBE4A'

let encodedUrl = encodeURI(url)

request.get({url : encodedUrl , json:true}, function(error, response, body){

    console.log(body.features[0].geometry.coordinates)
    
})