/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return Promise.all([
        knex.schema.alterTable('skill', (table) => {
            table.boolean('active').notNullable().defaultTo(true)
            table.timestamp('created_at').defaultTo(knex.fn.now())
        }),
        knex.schema.alterTable('hirer', (table) => {
            table.boolean('active').notNullable().defaultTo(true)
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
    ])
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return Promise.all([
        knex.schema.alterTable('skill', (table) => {
            table.dropColumn('active');
            table.dropColumn('created_at');
        }),
        knex.schema.alterTable('hirer', (table) => {
            table.dropColumn('active');
            table.dropColumn('created_at');
        })
    ])
};
