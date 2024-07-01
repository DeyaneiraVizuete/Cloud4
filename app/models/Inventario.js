const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Inventario extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'inventario';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre_inv','estado_inv'], //campos requeridos
            
            properties:{
                id_inv: { type: 'integer'},
                ubicacion_inv: { type: 'string',minLength:1},
                fecha_inv: { type: 'string',format: 'date'},
                estado_inv: { type: 'string'},
                nombre_inv: { type: 'string'},
                producto_id: { type: 'integer'}
            }
        };
    }

    static async getInventarios(){ 
        return await Inventario.query(); 
    }

    static async insert(data){ 
        return await Inventario.query().insert(data); 

    }

    static async update(data, id_inv){ 
        return await Inventario.query().patch(id_inv, data); 
    }

    static async delete(id){ 
        return await Inventario.query().deleteById(id_inv); 
    }
}


module.exports = Inventario;