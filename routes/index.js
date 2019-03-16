var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to OnTheVrge', message: 'Get ready to experience poetry! The best poetry ever!' });
});

module.exports = router;
