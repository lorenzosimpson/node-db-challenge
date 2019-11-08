
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'Strip out existing toilet', notes:'Make sure not to damage the floor', project_id: 1},
        {description: 'replace mirror', project_id: 1},
        {description: 'install new plumbing', project_id: 1},
        {description: 'bust down wall in kitchen hallway', project_id: 2},
        {description: 'replace oven and refrigerator', project_id: 2},
        {description: 'research html and css', project_id: 3},
        {description: 'learn javascript', project_id: 3},
        {description: 'learn react and implement/deploy', project_id: 3},
      ]);
};
