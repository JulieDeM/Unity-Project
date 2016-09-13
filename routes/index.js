var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var queries = require('../lib/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("*************you have hit home");
  queries.scores().then(function(data){
  res.render('annaHomepage', {info: data.rows});
  })
});

/*Form Route */
router.get('/create-user', function(req, res, next){
  // queries.getUserInfo(req.cookies.user).then(function(results) {
  //   var user = results.rows[0]
    res.render('form', {
      // name: user.name,
      // username: user.username
  //   });
  })
});

router.post('/new', function(req,res,next){
  queries.createUser(req.body.name, req.body.username, req.body.total_score, req.body.high_score).then(function(){
    res.redirect('/')
  })
})

/*Scores Route */
router.get('/scores', function(req, res, next){
  console.log("*******************you have hit the scores route");
  queries.scores().then(function(data){
    res.render('scores', {info: data.rows})
  })
})

module.exports = router;
