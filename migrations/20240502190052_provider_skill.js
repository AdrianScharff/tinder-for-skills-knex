/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('provider_skill', (table) => {
   table.integer('provider_id').unsigned().notNullable()
   table.integer('skill_id').unsigned().notNullable()

   table.primary(['provider_id', 'skill_id'])

   table.decimal('hourly_rate')

   table.foreign('provider_id').references('provider.provider_id').onDelete('CASCADE')
   table.foreign('skill_id').references('skill.skill_id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('provider_skill')
};
