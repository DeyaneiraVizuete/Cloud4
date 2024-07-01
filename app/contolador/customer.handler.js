const Customer = require('../models/Customer'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listCustomer = async (req, res) => {
    try{
        const customer = await Customer.getCustomers(); //llamado a funcion de select
        res.json(customer); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertCustomer = async(req,res) =>{
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateCustomer = async(req,res) =>{
    try {
        const customer = await Customer.update(req.body, req.params.id);
        res.json(customer) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteCustomer = async(req,res) =>{
    try {
        const customer = await Customer.delete(req.params,id);
        res.json(customer)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};