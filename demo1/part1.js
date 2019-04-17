// require('colors');
// console.log('jack`s node.js'.rainbow); 


// var demo = new Object();
// demo.prototype.__defineGetter__('user',function(){
//     console.log('function user run');
// });
// demo.user();


// var d = new demo;
// console.log(typeof d) ;
//调用方法定于属性 __defineGetter__
// function demo(){
//     console.log('this is a demo');
// }
// demo.prototype.__defineGetter__('user',function(){
//     return 'this is defineGetter user ';
// });
// demo.prototype.getUser = function(){
//     console.log('this is function getUser')
// };
// var d = new demo();
// console.log(d.user);
// d.getUser();
//非阻塞IO
// console.log('start');
// setTimeout(function(){
//     console.log('run');
// },3000);
// console.log('end');

//暴露API
// var a = require('./module_a');
// console.log(a);
// console.log(a.api_name);
// a.api_getUser();

// var b = require('./module_b');
// console.log(b);
// var obj_b = new b('jack');
// console.log(obj_b);
// var is_check =  obj_b.check();
// console.log(is_check);
// console.log(obj_b.name);
// obj_b.getSubject();
// obj_b.check();

//buffer 例: Buffer.from(string,encoding) base64转二进制
var fs = require('fs');
var img_64 = 'AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDQyKjQ0Mpk0NDLDNDQy2TQ0Mu80NDL/NDQy/zQ0Mv80NDL/NDQy/zQ0Mv80NDLvNDQy2TQ0MsM0NDKZNDQyKjQ0MuU0NDLpNDQytTQ0MqM0NDKTNDQykTQ0MoU0NDKBNDQygTQ0MoU0NDKRNDQykzQ0MqU0NDK1NDQy6TQ0MuU0NDL/NDQyoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ0MqE0NDL/NDQy/zQ0MqEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDKhNDQy/zQ0Mv80NDKhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDQyoTQ0Mv80NDL/NDQyoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ0MqE0NDL/NDQy/zQ0MqEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDKhNDQy/zQ0Mvc0NDLLNDQyYjQ0MlI0NDJANDQyQDQ0MjI0NDIwNDQyMDQ0MjI0NDJANDQyQDQ0MlI0NDJiNDQyyzQ0Mvc0NDJoNDQy6zQ0Mv80NDL/NDQy/zQ0Mv80NDL/NDQy/zQ0Mv80NDL/NDQy/zQ0Mv80NDL/NDQy/zQ0Mus0NDJoAAAAAAAAAAA0NDIUNDQyKjQ0MkI0NDJaNDQyVDQ0Mlg0NDJYNDQyVDQ0Mlo0NDJCNDQyKjQ0MhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDIgNDQy/zQ0MmAAAAAAAAAAADQ0MmA0NDL/NDQyIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDQyIDQ0Mv80NDJgAAAAAAAAAAA0NDJgNDQy/zQ0MiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ0MiA0NDL/NDQyYAAAAAAAAAAANDQyYDQ0Mv80NDIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAIABAAAAAAAAP/wAAD/8AAA//AAAP/wAAD/8AAA//AAAgAEAAP//AAD73wAA+98AAPvfAAD//wAA//8AAA==';
var b64string = img_64;
var buf = Buffer.from(b64string, 'base64'); 
fs.writeFile('./public/logo.ico',buf,function(err,data){
    console.log('success');
});
