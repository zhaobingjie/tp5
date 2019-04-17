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
console.log(process.argv);

console.log(__dirname);
console.log(process.cwd());