/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('ventas', function(table){
        table.integer('producto_id').unsigned().notNullable();
        table.foreign('producto_id').references('producto.id_prod');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('ventas', function(table){
        table.dropColumn('producto_id');
        table.dropForeign('producto_id');
      });
};
