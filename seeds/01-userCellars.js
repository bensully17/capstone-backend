exports.seed = function(knex, Promise) {
  return knex('user_cellars').del()
    .then(function () {
      return knex('user_cellars').insert([
        {id: 1, uid: 'kTNnfDzPUpgkFtN7Eay9PZ9sKv12', wineMaker: 'The Prisoner Wine Co', wineName: 'The Prisoner', vintage: 2014, varietal: 'Red Blend', grapes: ["Zinfandel", "Cabernet Sauvignon", "Petite Syrah"], notes: 'Very smooth. Dark almost purple color. Fruity nose with a strong finish. Excellent wine!', rating: 5, imageURL:''}
      ])
    })
}
