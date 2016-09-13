var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var queries = require('../lib/queries');
var passport = require('passport');
var app = require('../app');

// module.exports = function(app, passport){

/*login route */
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
// }



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("*************you have hit home");
  queries.scores().then(function(data){
    console.log(data);
  res.render('index', {info: data.rows});
  })
});


router.get('/loggedin', function(req,res,next){

})

/*Form Route */
router.get('/create-user', function(req, res, next){
  queries.getUserInfo().then(function(results) {
    var user = results.rows[0]
    res.render('form', {
      name: user.name,
      username: user.username
    });
  })
});

router.post('/new', function(req,res,next){
  queries.createUser(req.body.name, req.body.username, req.body.total_score, req.body.high_score).then(function(){
    res.redirect('/')
  })
});


/*Scores Route */
router.get('/scores', function(req, res, next){
  console.log("*******************you have hit the scores route");
  queries.scores().then(function(data){
    res.render('scores', {info: data.rows})
  })
})

module.exports = router;
