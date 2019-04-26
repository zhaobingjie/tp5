var request = require('superagent');
request.get('http://localhost:3000/search').send({q:'jack'}).end(function(res){
    console.log(res.text);
})