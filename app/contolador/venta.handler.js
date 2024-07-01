const Venta = require('../models/Venta'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listVenta = async (req, res) => {
    try{
        const venta = await Venta.getVentas(); //llamado a funcion de select
        res.json(venta); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertVenta = async(req,res) =>{
    try {
        const venta = await Venta.insert(req.body);
        res.status(201).json(venta) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateVenta = async(req,res) =>{
    try {
        const venta = await Venta.update(req.body, req.params.id);
        res.json(venta) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteVenta = async(req,res) =>{
    try {
        const venta = await Venta.delete(req.params,id);
        res.json(venta)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listVenta,
    insertVenta,
    updateVenta,
    deleteVenta,
};