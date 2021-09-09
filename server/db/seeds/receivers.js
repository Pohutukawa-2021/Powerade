exports.seed = (knex) => {
  return knex('receivers').del()
    .then(function () {
      return knex('receivers').insert([
        { id: 1, name: 'Alan' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Austin' },
        { id: 4, name: 'James' },
        { id: 5, name: 'Siyang' }
      ])
    })
}
