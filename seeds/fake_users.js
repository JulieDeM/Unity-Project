
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_games').insert({id: 1, name: 'bill', username: 'billybobjoe', total_score: 23, high_score: 21}),
        knex('user_games').insert({id: 2, name: 'anna', username: 'annabannana', total_score: 20, high_score: 2}),
        knex('user_games').insert({id: 3, name: 'sarah', username: 'sarahmera', total_score: 43, high_score: 5}),
      ]);
    });
};
