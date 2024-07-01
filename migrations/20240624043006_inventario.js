/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('inventario', table => {
        table.increments('id_inv').primary();
        table.string('ubi_inv').notNullable();
        table.date('fecha_inv').notNullable();
        table.string('estado_inv').notNullable();
        table.string('nombre_inv').notNullable();
        table.timestamp(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('inventario')
};
