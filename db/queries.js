const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('wines')
  },
  addWine(body){
    return knex('wines')
    .insert(body)
    .returning('*')
    .then(newWine => newWine[0])
  }
}