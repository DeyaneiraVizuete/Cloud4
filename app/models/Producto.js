const { format } = require('mysql');
const { Model } = require('objection'); //llamar a Model de la lib objetcion

class Producto extends Model { //crea herencia de Model
    static get tableName(){ //especifica el nombre de la tabla
        return'producto';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre_prod','precio_prod'], //campos requeridos
            
            properties:{
                id_prod: { type: 'integer'},
                nombre_prod: { type: 'string',minLength:1},
                precio_prod: { type: 'number'},
                cantidad_prod: { type: 'integer'},
                descripcion_prod: { type: 'string'}
                
            }
        };
    }

    static async getProductos(){ //metodo para listar proveedores
        return await Producto.query(); //select * from customer
    }

    static async insert(data){ //metodo para insertar proveedores
        return await Producto.query().insert(data); //insert into customer values .....

    }

    static async update(data, id_prod){ //metodo para editarproveedores
        return await Producto.query().patch(id_prod, data); //update set data where id=0 
    }

    static async delete(id_prod){ //metodo para eliminarproveedores
        return await Producto.query().deleteById(id_prod); //delete from customer where id=0
    }
}


module.exports = Producto;