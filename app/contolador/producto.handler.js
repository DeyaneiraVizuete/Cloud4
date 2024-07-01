const Producto = require('../models/Producto'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listProducto = async (req, res) => {
    try{
        const producto = await Producto.getProductos(); //llamado a funcion de select
        res.json(producto); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertProducto = async(req,res) =>{
    try {
        const producto = await Producto.insert(req.body);
        res.status(201).json(producto) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateProducto = async(req,res) =>{
    try {
        const producto = await Producto.update(req.body, req.params.id_prod);
        res.json(producto) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteProducto = async(req,res) =>{
    try {
        const producto = await Producto.delete(req.params,id_prod);
        res.json(producto)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};