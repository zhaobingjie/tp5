
var fs = require('fs');
//阻塞代码
// var data = fs.readFileSync('../README.md');
// console.log(data.toString());
// console.log('end');

//非阻塞代码
// var data = fs.readFile('../README.md',function(err,data){
	// if(err) return console.error(err);
	// console.log(data.toString());
// })
// console.log('its stop... ');

// 事件
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');
  
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
 
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });

// // 触发 connection 事件 
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");

// var demoHandler = function demo(){
// 	console.log('demo is runing');
// }
// var listener1 = function listener1(){
// 	console.log('listener1 is run');
// }
// eventEmitter.on('runDemo',demoHandler);//注册一个监听器
// eventEmitter.addListener('runDemo',listener1);//添加一个监听器到监听器数组尾部
// // eventEmitter.removeListener('runDemo',demoHandler);//删除指定监听器 arg: 事件名称,回调函数
// eventEmitter.emit('runDemo');
// var num = eventEmitter.listenerCount('runDemo');
// console.log(num);

// var Hello = require('./hello'); 
// hello = new Hello(); 
// hello.setName('BYVoid'); 
// hello.sayHello(); 
// console.log(__filename);
// setTimeout(function(){
// 	console.log(__dirname);
// },1000)

// //输出当前目录
// console.log('当前目录: '+process.cwd());
// //输出当前版本
// console.log('当前版本: '+process.version);
// //输出内存使用情况
// console.log(process.memoryUsage());\

// Node.js 常用工具 util
//util.inherits
var util = require('util');
// function Base(){
// 	this.name = 'base';
// 	this.base = '1992';
// 	this.sayHi = function(){
// 		console.log('hi '+this.name);
// 	};
// }

// Base.prototype.showName = function(){
// 	console.log(this.name);
// }
// var objBase = new Base();
// function child(){
// 	this.name = 'child';
// }
// util.inherits(child,Base);//child 仅继承了Base 在原型中定义的函数
// var objchild = new child;
// objBase.showName();
// objchild.showName();
// objBase.sayHi();
// var time1 = new Date();
// console.log(typeof time1);
// var time2 = Date();
// console.log(typeof time2);
// console.log(util.isDate(time1));
// console.log(util.isDate(time2));
require('colors');
console.log('jack node'.rainbow);