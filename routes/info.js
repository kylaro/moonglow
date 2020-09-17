var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/info', function(req, res, next) {
  console.log("hello")
  console.log("hello")
  res.render('info', { title: 'Info' });
  console.log("hello")
});

module.exports = router;
