const Knex = require('knex') // llamada a la libreria knex
const {Model} =require('objection') //llamada a model de objection
const knexConfig=require('./knexfile') // llamada a configuracion

const knex = Knex(knexConfig.development); //inicializar el objeto entorno de desarrollo
Model.knex(knex); //configurar objection con datos de kanex

module.exports = knex; //exportar configuracion