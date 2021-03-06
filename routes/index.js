var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var queries = require('../lib/queries');
var passport = require('passport');


/*login route */
router.get('/auth/facebook', passport.authenticate('facebook',{
    scope: 'public_profile'
}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    queries.getUserInfo(req.body.username).then(function(username){
      if(username.username == undefined || null){
        res.redirect('/create-user')
      } else{
        res.redirect('/');
      }
    })
  });
// }



/* GET home page. */
router.get('/', function(req, res, next) {
  queries.scores().then(function(data){
    console.log(data);
  res.render('annaHomepage', {info: data.rows});
  })
});


router.get('/loggedin', function(req,res,next){

})

router.get('/logout', function(req, res, next){

})

router.get('/cube-collector', function(req,res,next){
  res.render('cubecollector')
});

router.get('/obsolete-robots', function(req,res,next){
  res.render('obsoleterobots')
});

router.get('/cat-gems', function(req,res,next){
  queries.userScore().then(function(userscoress){
    console.log(userscoress);
    res.render('catsgems', { userscoress: userscoress})

  })
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
  queries.createUser(req.body.username, req.body.total_score, req.body.high_score, req.body.fb_id).then(function(){
    res.redirect('/')
  })
});


/*Scores Route */
router.get('/scores', function(req, res, next){
  queries.scores().then(function(data){
    res.render('scores', {info: data.rows})
  })
})

module.exports = router;
