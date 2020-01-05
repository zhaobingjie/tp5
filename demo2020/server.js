var express = require('express');
var app = new express();
var demoRouter = require('./src/routes/demo');
var indexRouter = require('./src/routes/index');
app.use('/',indexRouter);
app.use('/demo',demoRouter);

var server = app.listen(3000,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});