
exports.seed = function(knex) {
      return knex('resources').insert([
        {name: 'toilet', description: 'toilet that uses minimal water'},
        {name: 'paint', description: 'must not be oil-based'},
        {name: 'kitchen sink'},
        {name: 'new oven', description: 'preferably whirpool or kenmore'},
        {name: 'React.js library', description:'front end framework for creating UI'},
        {name: 'Computer', description: 'development software installed'}
      ]);
};
