
exports.up = function(knex) {
  return knex.schema

  .createTable('project_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })

  .createTable('project_tasks', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_tasks')
    .dropTableIfExists('project_resources')
};
