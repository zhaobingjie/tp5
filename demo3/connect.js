var connect = require('connect');
var server = connect.createServer();
var fs = require('fs');
var ROOT_PATH = __dirname + '/website';

/**
 * 处理静态文件 授权访问静态文件
 */
// server.use(connect.static(__dirname + '/website'));

server.use(function(req,res,next){
    //记录日志
    console.error(' %s $s',req.method,req.url);
    next();
});
server.use(function(req,res,next){
    if("GET" == req.method && '/images' == req.url.substr(0,7)){
        fs.stat(ROOT_PATH+req.url,function(err,stat){
            if(err || !stat.isFile()){
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            serve(res,ROOT_PATH+req.url,'image/jpg');//Content-Type:image/jpg 在网页中显示图片 application/jpg 直接下载图片
        });
    }else{
        next();
    }
});
server.use(function(req,res,next){
    if ("GET" == req.method && '/' == req.url) {
        serve(res,ROOT_PATH+'/index.html','text/html');
    } else {
        next();
    }
});
server.use(function(req,res,next){
    res.writeHead(404);
    res.end('Not Found');
});
function serve(res,path,type){
    res.writeHead(200,{'Content-Type':type});
    fs.createReadStream(path).pipe(res);
}
server.listen(3002);