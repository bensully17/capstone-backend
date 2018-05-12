
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', (table) => {
    table.increments()
    table.text('wineMaker')
    table.text('wineName')
    table.text('varietal')
    table.specificType('grapes', 'text[]')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines')
};
