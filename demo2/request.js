var http = require('http'),qs = require('querystring');
function send(theName){
    http.request({
        host : 'localhost',
        port : 3000,
        url : '/',
        method : 'POST'
    },function(res){
        var body = '';
        res.setEncoding('utf8');
        res.on('data',function(chunk){
            body += chunk;
        });
        res.on('end',function(){
            console.log(' \033[90m request complete! \033[39m');
            process.stdout.write('\n your name :');
        });
    }).end(qs.stringify({name:theName}));
}
process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(name){
    send(name.replace('\r\n',''));
});
