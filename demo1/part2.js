//cli 应用
// var stdout = process.stdout;
// var stdin = process.stdin;
// var fs = require('fs');
// fs.readdir(process.cwd(),function(err,files){
//     console.log('');
//     if(!files.length){
//         return console.log(' \003[31m No files ! \003[39m\n ');
//     }
//     console.log(' select which file or directory to see\n ');
//     function file(i){
//         var filename = files[i];
//         fs.stat(__dirname+'/'+filename,function(err,stat){
//             if(stat.isDirectory()){
//                 console.log(' '+(i-1)+' \033[36m'+filename+'\033[39m ');
//             }else{
//                 console.log(' '+(i-1)+' \033[90m'+filename+'\033[39m ');
//             }
//         });
//         i++;
//         if(i==files.length){
//             read();
//         }else{
//             file(i);
//         }
//     }
//     function read(){
//         console.log('');
//         stdout.write(' \033[33mEnter your chice: \033[39m');
//         stdin.resume();
//         stdin.setEncoding('utf8');
//         stdin.on('data',option);
//     }
//     function option(data){
//         if(!files[Number(data)]){
//             stdout.write(' \033[31mEnter your chice: \033[39m');
//         }else{
//             stdin.pause();
//             console.log(' you chiced '+files[Number(data)]);
//         }
//     }
//     file(0);
// })

//argv 包含了所有Node程序运行时的参数值
// console.log(process.argv);
// console.log(process.argv.slice(2));//cli:node part2 start           console:['start']

//获取目录
// console.log(__dirname);
// console.log(process.cwd());

//stream 流
//使用 stream方式读取大文件更加高效合理,以"\n" 分割读取(每次读取占用内存小),
// var fs = require('fs');
// var stream = fs.createReadStream('./public/demo.log');
// stream.setEncoding('UTF8');
// var content = '';
// stream.on('data',function(chunk){
//     content += chunk;
// });
// stream.on('end',function(){
//     console.log(content);
// });
// stream.on('error',function(err){
//     console.log(err);
// })

//fs.watch(监事整个目录),fs.watchFile(监事文件)
// var fs = require('fs');
// var files  = fs.readdirSync(__dirname+'/public');
// files.forEach(function(file){
//     if(/\.txt/.test(file)){
//         var filename = __dirname+'/public/'+file;
//         fs.watchFile(filename,function(){
//             console.log('file: '+ filename +' changed ! ');
//         });
//     }
// });
// fs.writeFile(__dirname+'/public/watch.txt','cache',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('写入成功');
//     }
// })

//----------------------------  TCP:page66 --------------------------------
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>Hello World!</h1>');
    res.end();
}).listen(8080);
