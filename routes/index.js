var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
  
});
router.get('/itnext', function(req, res, next) {
  res.render('itnext');
});
router.get('/spinmatic', function(req, res, next) {
  res.render('spinmatic');
});

module.exports = router;
