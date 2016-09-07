var knex = require('../db/knex');

module.exports ={

  createUser : function(user){
    return knex.raw(`INSERT INTO user_games WHERE username='${username}'`)
  },


}
