const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Customer extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'customer';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['name','apellido'], //campos requeridos
            
            properties:{
                id: { type: 'integer'},
                name: { type: 'string',minLength:1},
                apellido: { type: 'string',minLength:1},
                dia_hora: { type: 'string', format:'date-time'},
                age: { type: 'string'}
            }
        };
    }

    static async getCustomers(){ //metodo para listar clientes
        return await Customer.query(); //select * from customer
    }

    static async insert(data){ //metodo para insertar clientes
        return await Customer.query().insert(data); //insert into customer values .....

    }

    static async update(data, id){ //metodo para editar cliente
        return await Customer.query().patch(id, data); //update set data where id=0 
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Customer.query().deleteById(id); //delete from customer where id=0
    }
}


module.exports = Customer;