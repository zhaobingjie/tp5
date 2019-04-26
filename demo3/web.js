var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    var ROOT_PATH = __dirname + '/website';
    if("GET" == req.method && '/images' == req.url.substr(0,7)){
        fs.stat(ROOT_PATH+req.url,function(err,stat){
            if(err || !stat.isFile()){
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            serve(ROOT_PATH+req.url,'application/jpg');
        });
    } else if ("GET" == req.method && '/' == req.url) {
        serve(ROOT_PATH+'/index.html','text/html');
    } else {
        res.writeHead(404);
        res.end('NOT FOUND');
    }
    function serve(path,type){
        res.writeHead(200,{'Content-Type':type});
        fs.createReadStream(path).pipe(res);
    }
}).listen(3001);

