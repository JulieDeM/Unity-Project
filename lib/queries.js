var knex = require('../db/knex');

module.exports ={

  createUser : function(user){
    return knex.raw(`INSERT INTO user_games (name, username, total_score, high_score) values('${name}',''${username}', ${total_score}, ${high_score})`)
  }
}
