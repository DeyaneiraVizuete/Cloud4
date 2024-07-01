const Cliente = require('../models/Cliente'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listCliente = async (req, res) => {
    try{
        const cliente = await Cliente.getClientes(); //llamado a funcion de select
        res.json(cliente); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertCliente = async(req,res) =>{
    try {
        const cliente = await Cliente.insert(req.body);
        res.status(201).json(cliente) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateCliente = async(req,res) =>{
    try {
        const cliente = await Cliente.update(req.body, req.params.id);
        res.json(cliente) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteCliente = async(req,res) =>{
    try {
        const cliente = await Cliente.delete(req.params,id);
        res.json(cliente)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
};