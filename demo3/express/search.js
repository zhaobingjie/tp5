var request = require('superagent');
module.exports = function search(query,fn){
    request.get('localhost:3000/search').send({q:query}).end(function(res){
        console.log(res.body);
        if(res.body && Array.isArray(res.body.results)){
            return fn(null,res.body.results);
        }else{
            return fn('bad response!');
        }
    });

}