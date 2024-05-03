/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
 return knex.schema.hasTable('service').then((exists) => {
  if (!exists) {
   return knex.schema.createTable('service', (table) => {
    table.increments('service_id').primary()
    table.integer('provider_id').notNullable()
    table.integer('hirer_id').notNullable()
    table.integer('skill_id')
    table.decimal('hourly_rate')
    table.decimal('hours')
    table.decimal('advance_amount')
    table.boolean('advance_is_paid').defaultTo(false)
    table.timestamp('start_date').defaultTo(null)
    table.string('place')
    table.boolean('is_completed').defaultTo(false)
    table.boolean('is_fully_paid').defaultTo(false)
    table.decimal('provider_rating', 3, 2)

    table.foreign('provider_id').references('provider.provider_id').onDelete('CASCADE')
    table.foreign('hirer_id').references('hirer.hirer_id').onDelete('CASCADE')
    table.foreign('skill_id').references('skill.skill_id').onDelete('CASCADE')
   }).then(() => {
    return knex.raw('ALTER TABLE service ADD CONSTRAINT provider_rating_check CHECK (provider_rating >= 0 AND provider_rating <= 5)')
   })
  }
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
 return knex.schema.dropTableIfExists('service')
};
