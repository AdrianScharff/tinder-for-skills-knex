/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('skill').then((exists) => {
   if (!exists) {
    return knex.schema.createTable('skill', (table) => {
     table.increments('skill_id').primary()
     table.string('skill_name', 150).notNullable()
     table.text('skill_description')
    })
   }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('skill').then((exists) => {
   if (exists) {
    return knex.schema.dropTable('skill')
   }
  })
};
