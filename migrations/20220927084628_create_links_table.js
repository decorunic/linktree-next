/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('links' , function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('url', 255).notNullable();
    table.string('type', 255).notNullable();
    table.string('icon', 255).notNullable();
    table.integer('order').notNullable();
    table.boolean('enable').notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('links');
};
