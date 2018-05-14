
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_cellars', (table) => {
    table.increments()
    table.text('uid')
    table.text('wineMaker')
    table.text('wineName')
    table.integer('vintage')
    table.text('varietal')
    table.specificType('grapes', 'text[]')
    table.text('notes')
    table.string('imageURL')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_cellars')
};
