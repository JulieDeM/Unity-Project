var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Form Route */
router.get('/create-user', function(req, res, next){
  res.render('form', {title: 'form page'})
})

module.exports = router;
