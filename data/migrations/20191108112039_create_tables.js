
exports.up = function(knex) {
  return knex.schema

  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name')
        .notNullable()
      tbl.string('description')
  })

  .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name')
        .notNullable()
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false)
  })

  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('description')
        .notNullable()
      tbl.string('notes')
      tbl.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
};
