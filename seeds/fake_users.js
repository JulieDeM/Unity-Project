
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_games').insert({id: 1, name: 'bill', username: 'billybobjoe', total_score: 32, high_score: 21}),
        knex('user_games').insert({id: 2, name: 'anna', username: 'annabannana', total_score: 31, high_score: 2}),
        knex('user_games').insert({id: 3, name: 'sarah', username: 'sarahmera', total_score: 43, high_score: 5}),
        knex('user_games').insert({id: 4, name: 'bob', username: 'bob', total_score: 55, high_score: 17}),
        knex('user_games').insert({id: 5, name: 'mary', username: 'marrryyyyy', total_score: 10, high_score: 2}),
        knex('user_games').insert({id: 6, name: 'julie', username: 'jules', total_score: 30, high_score: 10}),
        knex('user_games').insert({id: 7, name: 'miles', username: 'milesaway', total_score: 28, high_score: 12}),
        knex('user_games').insert({id: 8, name: 'coco', username: 'coconut', total_score: 26, high_score: 11}),
        knex('user_games').insert({id: 9, name: 'willy', username: 'freewilly', total_score: 19, high_score: 5}),
        knex('user_games').insert({id: 10, name: 'nelson', username: 'nelson1', total_score: 12, high_score: 6}),

      ]);
    });
};
