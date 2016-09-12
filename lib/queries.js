var knex = require('../db/knex');

module.exports ={

  createUser : function(user){
    return knex.raw(`INSERT INTO user_games (name, username, total_score, high_score) values('Julie',''${username}', ${total_score}, ${high_score})`)
  },
  getUserInfo: function(userInfo){
    return knex.raw(`SELECT * FROM user_games WHERE id=${userInfo}`)
  },
  scores: function(){
    console.log("hello");
    return knex.raw(`SELECT * from user_games`)
    console.log("done");
  }
}
