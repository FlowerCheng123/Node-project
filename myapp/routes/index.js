var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../pier', 'index.html'));
  // res.sendFile('pier/index.html');
});

module.exports = router;
