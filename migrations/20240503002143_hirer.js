/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
 return knex.schema.hasTable('hirer').then((exists) => {
  if (!exists) {
   return knex.schema.createTable('hirer', (table) => {
    table.increments('hirer_id').primary()
    table.string('hirer_name').notNullable()
    table.text('hirer_description')
   })
  }
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
 return knex.schema.hasTable('hirer').then((exists) => {
  if (exists) {
   return knex.schema.dropTable('hirer')
  }
 })
};