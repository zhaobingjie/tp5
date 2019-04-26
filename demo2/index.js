//模块依赖
var net = require('net');
//连接数计数器
var count = 0;
var users = {};
//创建服务
var server = net.createServer(function(conn){
    //handle(处理) connection
    conn.setEncoding('utf8');
    console.log(' \033[90m new connecttion!\033[39m');
    conn.write(
            '\n > welcome to node-chat'
            +' \n > '+count+' clients online at this time'
            +' \n > please write your name and press enter:'
    );
    count++;
    var username;
    conn.on('data',function(data){
        var message = getmsg(data);
        if(message){ 
            if(!username){//第一次输入,保存用户名
                if(users[message]){
                    conn.write(' sorry,username: '+ message+' has been registed');
                }else{
                    username = message;
                    users[username] = conn;//每个客户端对应的conn是不一样的,保存每个客户端的stream
                    // console.log(username+' join the room');
                    //广播
                    broadcast(username+' join the room',true);
                }
            }else{//聊天内容
                broadcast(username+': '+message,true);
            }
            
        }
       
    });
    function broadcast(outmsg,exceptSelf){
        for(var i in users){
            if(!exceptSelf || i!=username){
                users[i].write(outmsg+'\n');
            }
        }
    }
    //监听tcp连接关闭事件
    conn.on('close',function(){
        count--;
        delete users[username];
    });
    var msg = '';//每次连接tcp服务都会触发回调,所有msg变量不会被污染
    function getmsg(data){
         // console.log(data);//<Buffer 6a> 
        // console.log(data.toString('utf8'));
        // console.log(data);
        // TODO::客户端每出入一个字符都会触发data事件,通过判断客户端是否输出回车,标志客户端输入一次信息
        if(!/\r\n/.test(data)){
            msg += data;
            return false;
        }else{
            var _msg = msg;
            msg = '';
            return _msg;
        }
    }
});
//监听
server.listen(3000,function(){
    console.log(' \033[96m server listening on *:3000\033[39m');
});