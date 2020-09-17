var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.render('index', { title: 'Moonglow' });
});

router.get('/info', function(req, res, next) {
  console.log("hello from index")
  //res.render('info', { title: 'Info' });
  res.sendfile('./public/info.html');
});

module.exports = router;
