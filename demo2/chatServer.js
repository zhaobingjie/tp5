var net=require('net');
var count=0;
var users={};
 
var server=net.createServer(function (conn) {
  conn.setEncoding('utf8');
  conn.write(count+' people are connected'
    +'\nplease write your nickname:');
  count++;
  var nickname;
  conn.on('data',function (data) {
    data=data.replace(/\r\n/,'');
    if(!nickname){
      if(users[data]){
        conn.write('\n nickname already used,try again:');
        return;
      }else {
        nickname=data;
        users[nickname]=conn;//每个客户端对应的conn是不一样的
        for(var i in users){
          users[i].write(nickname+' join the room\n');
        }
      }
    }else {
      conn.write('nickname: '+nickname+'\n');
      for(var i in users){
        if(i!=nickname){
          users[i].write(nickname+': '+data+'\n');
        }
      }
    }
  });
  conn.on('close',function () {//这里防止连接出错，使用close而非end
    console.log(nickname+' client disconnected\n');
    count--;
    delete users[nickname];
  });
  conn.on('error',function (err) {
    console.log('Error in connection:'+ err+'\n');
  });
}).listen(3001,function () {
  console.log('server is listenning on 3001');
});