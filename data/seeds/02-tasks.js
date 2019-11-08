
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'Strip out existing toilet', notes:'Make sure not to damage the floor'},
        {description: 'replace mirror'},
        {description: 'install new plumbing'},
        {description: 'bust down wall in kitchen hallway'},
        {description: 'replace oven and refrigerator'},
        {description: 'research html and css'},
        {description: 'learn javascript'},
        {description: 'learn react and implement/deploy'},
      ]);
};
