
var fs = require('fs');
//阻塞代码
// var data = fs.readFileSync('../README.md');
// console.log(data.toString());
// console.log('end');

//非阻塞代码
var data = fs.readFile('../README.md',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
})

console.log('its stop... ');