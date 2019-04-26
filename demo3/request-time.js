module.exports = function (opts){
    var time = opts.time || 100;
    return function(req,res,next){
        var timer = setTimeout(function(){
            console.log(' \033[91m is taking too long!\033[39m',req.method,req.url);
        },time);
        //重写函数(猴子补丁)
        var end = res.end;
        res.end = function(chunk,encoding){
            res.end = end;
            res.end(chunk,encoding);
            clearTimeout(timer);
        };
        next();
    }
}