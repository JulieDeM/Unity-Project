var knex = require('../db/knex');

module.exports ={

  createUser : function(name, username, total_score, high_score){
    return knex.raw(`INSERT INTO user_games (id, name, username, total_score, high_score) values (DEFAULT, '${name}','${username}', ${total_score}, ${high_score})`)
  },
  getUserInfo: function(id){
    return knex.raw(`SELECT * FROM user_games`)
  },
  scores: function(){
    console.log("hello");
    return knex.raw(`SELECT * from user_games ORDER BY total_score desc`)
    console.log("done");
  },
  updateScores: function(id){
    return knex.raw(`UPDATE user_games WHERE id=${id}`)
  }
}
