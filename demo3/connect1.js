var connect = require('connect'),timeOut = require('./request-time');

var server = connect.createServer();

/* 记录请求情况 */
// server.use(connect.logger('dev'));
server.use(connect.logger('type :url, length :method, took :response-time ms'));//自定义

/**
 * 实现超时提醒中间节
 */
server.use(timeOut({time:500}));

//快速反应
server.use(function(req,res,next){
    if('/a' == req.url) {
        res.writeHead(200);
        res.end('Fast');
    }else{
        next();
    }
});
server.use(function(req,res,next){
    if('/b' == req.url) {
        setInterval(function(){
            res.writeHead(200);
            res.end('slow!')
        },1000);
    }else{
        next();
    }
});

server.listen(3003);