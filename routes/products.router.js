const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();


//Endpoint específico
router.get('/filter', (req,res) => {
  res.send('Filter');
});

//endpoint productos (dinamico)
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});


//producto id, se pone : porque es un parametro
router.get('/:id', (req,res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);

});


//POST para crear producto

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).res.json({
    message: 'create',
    data:body //se retorna la respuesta.-
  });
});


//PATCH para actualizar producto

router.patch('/:id', (req, res) => {
  const { id } = req.params; //Se solicita la ID
  const body = req.body;
  res.json({
    message: 'update',
    id,
    data:body, //se retorna la respuesta.-
  });
});

//delete
router.delete('/:id', (req, res) => {
  const { id } = req.params; //Se solicita la ID
  res.json({
    message: 'deleted',
    id,
  });
});


module.exports = router;
