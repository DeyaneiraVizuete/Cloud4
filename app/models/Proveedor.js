const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Proveedor extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'proveedor';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre','email'], //campos requeridos
            
            properties:{
                id: { type: 'integer'},
                nombre: { type: 'string',minLength:1},
                email: { type: 'string'},
                direccion: { type: 'string',minLength:1},
                telefono: { type: 'string'},
                true: { type: 'string', format:'date-time'},
                cliente_id: { type: 'integer'},
                producto_id:  { type: 'integer'}

                
            }
        };
    }

    static async getProveedores(){ //metodo para listar proveedores
        return await Proveedor.query(); //select * from customer
    }

    static async insert(data){ //metodo para insertar proveedores
        return await Proveedor.query().insert(data); //insert into customer values .....

    }

    static async update(data, id){ //metodo para editarproveedores
        return await Proveedor.query().patch(id, data); //update set data where id=0 
    }

    static async delete(id){ //metodo para eliminarproveedores
        return await Proveedor.query().deleteById(id); //delete from customer where id=0
    }
}


module.exports = Proveedor;