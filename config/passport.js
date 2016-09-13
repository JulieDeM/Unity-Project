var configAuth = require('../auth');
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
// FB.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log('Logged in.');
//   }
//   else {
//     FB.login();
//   }
// });

// module.exports = function(passport){
passport.use(new FacebookStrategy({
    clientID: 1644351665877303,
    clientSecret: b7818e92d3005a8f52260d5b18dc9450,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// }
