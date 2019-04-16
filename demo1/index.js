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
function demo(){
    console.log('this is a demo');
}
demo.prototype.__defineGetter__('user',function(){
    return 'this is defineGetter user ';
});
demo.prototype.getUser = function(){
    console.log('this is function getUser')
};
var d = new demo();
console.log(d.user);
d.getUser();
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
