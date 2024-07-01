const Proveedor = require('../models/Proveedor'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listProveedor = async (req, res) => {
    try{
        const proveedor = await Proveedor.getProveedores(); //llamado a funcion de select
        res.json(proveedor); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertProveedor = async(req,res) =>{
    try {
        const proveedor = await Proveedor.insert(req.body);
        res.status(201).json(proveedor) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateProveedor = async(req,res) =>{
    try {
        const proveedor = await Proveedor.update(req.body, req.params.id);
        res.json(proveedor) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteProveedor = async(req,res) =>{
    try {
        const proveedor = await Proveedor.delete(req.params,id);
        res.json(proveedor)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listProveedor,
    insertProveedor,
    updateProveedor,
    deleteProveedor,
};