var fs = require('fs');
// fs.open('./tip.txt','r+','0755',function(err,fd){
//     if(err){
//         return console.log(err);
//     }
//     console.log('文件打开成功');
//     console.log(fd);
// })
// fs.stat('./tip.txt',function(err,stats){
//     console.log(stats);
// });
var str = 'node.js 写入';
fs.writeFile('input.txt',str,function(err,data){//写入
    if(err){
        return console.log(err);
    }
    console.log(data);
})
fs.readFile('input.txt',function(err,data){//读取
    console.log(data.toString());
})