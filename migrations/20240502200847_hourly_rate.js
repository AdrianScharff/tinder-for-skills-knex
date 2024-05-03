/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
 return knex.schema.hasTable('hourly_rate').then((exists) => {
  if (!exists) {
   return knex.schema.createTable('hourly_rate', (table) => {
    table.increments('hourly_rate_id').primary()
    table.decimal('hourly_rate').notNullable()
   })
  }f
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
 return knex.schema.hasTable('hourly_rate').then((exists) => {
  if (exists) {
   return knex.schema.dropTable('hourly_rate')
  }
 })
};
