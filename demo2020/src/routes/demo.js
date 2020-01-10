/**
 *  路由文件 
 */

const express = require(`express`);
const router = express.Router();

var model = require('../lib/model');


router.use((req, res, next) => {
  // console.log(`路由执行成功啦~~~`, Date.now());
  next()
})


router.get(`/`, (req, res, next) => {
  let r = model.sayHi(req.query.name);
  res.send('demo2020 - /demo ,num : '+r);
  // res.json({
  //   status: 200,
  //   data: `请求成功`
  // })
})


router.get(`/data`, (req, res, next) => {
  let r = model.sayHi(req.query.name);
  res.send('demo2020 - /demo/data , num : ' + r);
})

module.exports = router