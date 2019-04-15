//express_demo.js 文件
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({'extended':false});
//使用 express.static 中间件来设置静态文件路径
app.use('/public',express.static('public'));
var UPLOAD_PATH = __dirname+'/public/images/';
var fs = require('fs');
var multer = require('multer');
app.use(multer({dest:'/tmp/'}).array('avatar'));
var util = require('util');
//cookie信息
var cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/', function (req, res) {
    console.log(util.inspect(req.cookies));
    res.send('index get');
});
app.post('/', function (req, res) {
    res.send('index post');
});
app.get('/list', function (req, res) {
    res.send('/list get');
}); 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*', function(req, res) {   
    console.log("/ab* GET 请求");
    res.send('正则匹配');
 });
// 访问index.htm 页面
app.get('/index.htm',function(req,res){
    res.sendFile(__dirname+'/index.htm');
});
//表单提交get
app.get('/process_get',function(req,res){
    var response = {
        'first_name':req.query.first_name,
        'last_name':req.query.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
})
//表单提交post
app.post('/process_post',urlencodedParser,function(req,res){
    var response = {
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})
//上传文件
app.post('/upload_file',urlencodedParser,function(req,res){
    console.log(req.files);
    var filename = UPLOAD_PATH+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(filename,data,function(err){
            if(err){
                console.log(err);
            }else{
                var response = {
                    'username':req.body.username,
                    'filename':filename
                };
            }
            console.log(response);
            res.send(JSON.stringify(response));
        })
    })
})


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})