/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
 return knex.schema.hasTable('provider').then((exists) => {
  if (!exists) {
   return knex.schema.createTable('provider', (table) => {
    table.increments('provider_id').primary()
    table.string('name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age')
    table.text('description')
   })
  }
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
 return knex.schema.hasTable('provider').then((exists) => {
  if (exists) {
   return knex.schema.dropTable('provider')
  }
 })
};
