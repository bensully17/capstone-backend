const knex = require('./knex')

module.exports = {
  getAllUserCellars() {
    return knex('user_cellars')
  },
  getOneUserCellar(uid) {
    return knex('user_cellars')
    .where('uid', uid)
  },
  getAllWines(uid) {
    return knex('wines')
  },
  addWineToCellar(body){
    return knex('user_cellars')
    .insert(body)
    .returning('*')
    .then(newWine => newWine[0])
  },
  addWineToDB(body){
    return knex('wines')
    .insert(body)
    .returning('*')
    .then(newWine => newWine[0])
  }
}