const express = require('express');
const router = express.Router();

//3 rutas get
router.get('/',  (req, res)=> {
    res.send('Hola Express');
 });
 
router.get('/productos', (req, res) => {
    res.send('Lista de productos');
 });
 
 //traer un prod a travez de su id
 
router.get('/productos/:id', (req, res) => {
    res.send('Producto: ' + req.params.id);
 });


 module.exports = router;