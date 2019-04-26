var http = require('http');
var qs = require('querystring');
var url = require('url');
var list = [
    {text:'PHP初级入门',from_user:'高洛峰'},
    {text:'了不起的NODE.JS',from_user:'Rauch'},
    {text:'javascript高级编程',from_user:'jack'}
]
http.createServer(function(req,res){
    console.log(req.url);
    if("GET" == req.method){
        var path = url.parse(req.url,true).pathname;
        var param = url.parse(req.url,true).query;
        var q = param.q;
        if("/search" == path && q == 'jack'){
            var data = {
                status:1,
                msg : 'success',
                results:list
            }
        }else{
            var data = {
                status:0,
                msg : 'fail',
            }
        }
        res.writeHead(200);
        res.end(JSON.stringify(data));
    }
}).listen(3000);