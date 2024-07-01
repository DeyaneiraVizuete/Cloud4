const Inventario = require('../models/Inventario'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listInventario = async (req, res) => {
    try{
        const inventario = await Inventario.getInventarios(); //llamado a funcion de select
        res.json(inventario); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertInventario = async(req,res) =>{
    try {
        const inventario = await Inventario.insert(req.body);
        res.status(201).json(inventario) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateInventario = async(req,res) =>{
    try {
        const inventario = await Inventario.update(req.body, req.params.id_inv);
        res.json(inventario) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteInventario = async(req,res) =>{
    try {
        const inventario = await Inventario.delete(req.params,id_inv);
        res.json(inventario)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listInventario,
    insertInventario,
    updateInventario,
    deleteInventario,
};