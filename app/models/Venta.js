const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Venta extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'ventas';
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
                producto_id:  { type: 'integer'}

                
            }
        };
    }

    static async getVentas(){ //metodo para listar proveedores
        return await Venta.query(); //select * from customer
    }

    static async insert(data){ //metodo para insertar proveedores
        return await Venta.query().insert(data); //insert into customer values .....

    }

    static async update(data, id){ //metodo para editarproveedores
        return await Venta.query().patch(id, data); //update set data where id=0 
    }

    static async delete(id){ //metodo para eliminarproveedores
        return await Venta.query().deleteById(id); //delete from customer where id=0
    }
}


module.exports = Venta;