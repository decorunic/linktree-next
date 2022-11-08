/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('profile' , function(table) {
    table.increments('id').primary();
    table.string('title', 255).notNullable();
    table.string('bio', 255).notNullable();
    table.string('logo', 255).notNullable();
    table.string('hero', 255).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
