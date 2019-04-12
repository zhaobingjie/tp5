var http = require("http");
var querystring = require('querystring');
var url = require("url");
 
function start(route) {
  function onRequest(request, response) {
	var param_post = '';
	request.on('data',function(d){
		param_post += d;
	});
	request.on('end',function(){
		//解析参数
		param_post = querystring.parse(param_post);
		console.log(param_post);
	})
	var param = url.parse(request.url,true).query;
	var pathname = url.parse(request.url).pathname;
    // console.log("Request for " + pathname + " received.");
 
    route(pathname);//分配路由
 
    response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("GET: id->"+param.id+'\n');
	response.write("GET: name->"+param.name);
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;
