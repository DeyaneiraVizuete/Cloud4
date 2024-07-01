const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Cliente extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'cliente';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre','apellido'], //campos requeridos
            
            properties:{
                id: { type: 'integer'},
                nombre: { type: 'string',minLength:1},
                apellido: { type: 'string',minLength:1},
                email: { type: 'string'},
                telefono: { type: 'string'},
                producto_id: { type: 'integer'}
            }
        };
    }

    static async getClientes(){ //metodo para listar clientes
        return await Cliente.query(); //select * from customer
    }

    static async insert(data){ //metodo para insertar clientes
        return await Cliente.query().insert(data); //insert into customer values .....

    }

    static async update(data, id){ //metodo para editar cliente
        return await Cliente.query().patch(id, data); //update set data where id=0 
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Cliente.query().deleteById(id); //delete from customer where id=0
    }
}


module.exports = Cliente;