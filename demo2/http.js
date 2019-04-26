var http = require('http'),qs = require('querystring'),url = require('url');
http.createServer(function(req,res){
    if(req.method == "GET"){
        var path =  url.parse(req.url,true).pathname;
        console.log(path);
        var params = url.parse(req.url,true).query;
        if(path == '/search'){
            res.writeHead(200);
            var d = {id:params.id,name:'jack',status:params.status};
            res.end(JSON.stringify(d));
        }else{
            res.writeHead(404);
            res.end('NOT FOUND');
        }
        
    }
    if(req.method == "POST"){
        var body = '';
        req.on('data',function(chunk){
            body += chunk;
        });
        req.on('end',function(){
            res.writeHead(200);
            res.end('Done');
            console.log('request once');
            console.log(qs.parse(body));
        });
    }
    
}).listen(3030);