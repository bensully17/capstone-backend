
exports.seed = function(knex, Promise) {
  return knex('wines').del()
    .then(function () {
      return knex('wines').insert([
        {id: 1, wineMaker: 'The Prisoner Wine Co', wineName: 'The Prisoner', varietal: 'Red Blend', grapes: ["Zinfandel", "Cabernet Sauvignon", "Petite Syrah"]}
      ]);
    });
};
