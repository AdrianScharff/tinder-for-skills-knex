/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
 return knex.schema.hasTable('provider_skill').then((exists) => {
  if (exists) {
   return knex.schema.table('provider_skill', table => {
    table.integer('hourly_rate_id').unsigned().references('hourly_rate.hourly_rate_id')
   })
  }
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
 return knex.schema.hasTable('provider_skill').then((exists) => {
  if (exists) {
   return knex.schema.table('hourly_rate', table => {
    table.dropColumn('hourly_rate_id')
   })
  }
 })
};
