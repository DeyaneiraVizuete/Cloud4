/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedor', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable().unique();
        table.string('direccion').notNullable().unique();
        table.string('telefono').notNullable;
        table.timestamp(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor')
};
