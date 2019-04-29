var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.all('/add', function(req, res, next) {
  if(req.method == "POST"){
    console.log(req.body);
    var uname = req.body.uname;
    var mobile = req.body.mobile;
    var password = req.body.password;
  }
  res.render('users/add');
});

module.exports = router;
