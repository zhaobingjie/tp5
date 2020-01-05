var express = require('express');
var router = express.Router();
var model = require('../lib/model');

/* GET users listing. */
router.get('/', function(req, res, next) {
        let r = model.sayHi(req.query.name);
        res.send('demo2020 - index, num : '+r);
});

module.exports = router;
