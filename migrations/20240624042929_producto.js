/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', table => {
        table.increments('id_prod').primary();
        table.string('nombre_prod').notNullable();
        table.double('precio_prod').notNullable().unique();
        table.integer('cantidad_prod').notNullable().unique();
        table.string('descripcion_prod').notNullable();
        table.timestamp(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto')
};
