exports.up = function(knex, Promise) {
          return knex.schema.createTable('user_games', function(table){
            table.increments();
            table.string('name');
            table.string('username');
            table.integer('total_score');
            table.integer('high_score');
          });
};

exports.down = function(knex, Promise) {
          return knex.schema.dropTableIfExists('user_games');
};
