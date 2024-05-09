/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('service', table => {
        table.boolean('active').defaultTo(true).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('service', table => {
        table.dropColumn('active')
        table.dropColumn('created_at')
    })
};