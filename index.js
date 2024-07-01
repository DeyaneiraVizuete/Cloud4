//importar librerias
const express = require('express');
const knex = require('./db'); //llamado a conf de base de datos
const routes = require('./routers'); //llamado rutas

const app= express(); //creamos una nueva instancia 
const port=3000; //puerto de salida 

app.use(express.json()); //configura tipo de datos json 

app.use('/api',routes); //configura la url base y rutas

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})