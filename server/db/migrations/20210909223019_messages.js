exports.up = (knex) => {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.integer('senders_id').references('senders.id')
    table.integer('receivers_id').references('receivers.id')
    table.string('message')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('messages')
}
