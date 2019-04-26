var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
var search = require('./search');
//自定义配置
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('view options',{ layout:false });

app.get('/',function(req,res){
    res.render('index');
});
app.get('/search',function(req,res,next){
    console.log(req.url);
    search(req.query.q,function(err,data){
        if(err) return next();
        res.render('search',{result:data,search:req.query.q});
    });
});
var server = app.listen(3004, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })