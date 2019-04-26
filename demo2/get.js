var http = require('http'),qs = require('querystring');
http.get({
    host : '127.0.0.1',
    port : 3000,
    path : '/search?' + qs.stringify({id:1,status:99})
},function(res){
    // console.log(res);
    var body = '';
    res.on('data',function(chunk){
        body += chunk;
    });
    
    res.on('end',function(){
        if(body){
            var obj = JSON.stringify(body);
            console.log(obj)
        }else{
            console.log(body)
        }
        
    })
});