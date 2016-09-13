var knex = require('../db/knex');

module.exports ={
  createUser : function(username, total_score, high_score, fb_id){
    return knex.raw(`UPDATE user_games set username='${username}', total_score=${total_score}, high_score=${high_score} where fb_id='10208956322320129'`)
  },
  createfbinfo: function(userInfo){
    return knex.raw(`INSERT INTO user_games (id, fb_id, name) VALUES (DEFAULT, '${userInfo.id}', '${userInfo.name.givenName}')`)
  },
  getUserInfo: function(id){
    return knex.raw(`SELECT * FROM user_games`)
  },
  scores: function(){
    console.log("hello");
    return knex.raw(`SELECT * from user_games ORDER BY total_score desc`)
    console.log("done");
  },
  // userScore: function(scores){
  //   return knex.raw(`SELECT * from user_games WHERE fb_id=${fb_id}`)
  // },
  userScore: function(scores){
    return knex.raw(`SELECT * from user_games`)
  },
  updateScores: function(id){
    return knex.raw(`UPDATE user_games WHERE id=${id}`)
  },
  // getfbuser: function(fbuser){
  //   return knex.raw(`SELECT * FROM user_games WHERE fb_id = '${fbuser.id}'`)
  // }
  getfbuser: function(fbuser){
    return knex.raw(`SELECT * FROM user_games WHERE fb_id='${fbuser.id}'`)
  }
}
