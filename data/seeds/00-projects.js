
exports.seed = function(knex) {
      return knex('projects').insert([
        { name: 'bathroom rennovation', description: 'rennovate upstairs bathroom' },
        { name: 'kitchen rennovation', description: 'rennovate kitchen on ground floor' },
        { name: 'create personal website', description: 'make website for personal use' }
      ]);
};
