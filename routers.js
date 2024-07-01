const express = require('express'); //llamado a framework
const customerHandler = require('./app/contolador/customer.handler'); //llamar a handlers del api
const proveedorHandler = require('./app/contolador/proveedor.handler'); //llamar a handlers del api
const clienteHandler = require('./app/contolador/cliente.handler');
const productoHandler = require('./app/contolador/producto.handler');
const ventaHandler = require('./app/contolador/venta.handler');
const inventarioHandler = require('./app/contolador/inventario.handler');




const router = express.Router(); //variable para encapsular rutas

//registrar las rutas
//ruas de customer
router.get('/customers', customerHandler.listCustomer) //obtener cliente
router.post('/customers', customerHandler.insertCustomer) //insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer) //actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer) //eliminar cliente

//Proveedor
router.get('/proveedores', proveedorHandler.listProveedor) 
router.post('/proveedores', proveedorHandler.insertProveedor) 
router.patch('/proveedores/:id', proveedorHandler.updateProveedor) 
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor) 

//Cliente
router.get('/clientes', clienteHandler.listCliente) 
router.post('/clientes', clienteHandler.insertCliente) 
router.patch('/clientes/:id', clienteHandler.updateCliente) 
router.delete('/clientes/:id', clienteHandler.deleteCliente) 

//Producto
router.get('/productos', productoHandler.listProducto) 
router.post('/productos', productoHandler.insertProducto) 
router.patch('/productos/:id_prod', productoHandler.updateProducto) 
router.delete('/productos/:id_prod', productoHandler.deleteProducto) 

//Venta
router.get('/ventas', ventaHandler.listVenta) 
router.post('/ventas', ventaHandler.insertVenta) 
router.patch('/ventas/:id', ventaHandler.updateVenta) 
router.delete('/ventas/:id', ventaHandler.deleteVenta) 

//Inventario 
router.get('/inventarios', inventarioHandler.listInventario) 
router.post('/inventarios', inventarioHandler.insertInventario) 
router.patch('/inventarios/:id_inv', inventarioHandler.updateInventario) 
router.delete('/inventarios/:id_inv', inventarioHandler.deleteInventario) 

//otras rutas
module.exports=router;
