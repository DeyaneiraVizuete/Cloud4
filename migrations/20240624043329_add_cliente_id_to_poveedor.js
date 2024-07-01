/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('proveedor', function(table){
        table.integer('cliente_id').unsigned().notNullable();
        table.foreign('cliente_id').references('cliente.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('proveedor', function(table){
        table.dropColumn('cliente_id');
        table.dropForeign('cliente_id');
      });
};
