var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "I love chicken",
    user: "Houser",
    date: new Date(),
  },
  {
    text: "I love pamtas and cheems",
    user: "Cocco",
    date: new Date(),
  },
  {
    text: "I like lettuce, but love hay",
    user: "Quemso",
    date: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
