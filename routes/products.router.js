const express = require('express');
const {faker} = require('@faker-js/faker');
//const faker = require('faker');
const router = express.Router();


//Endpoint específico
router.get('/filter', (req,res) => {
  res.send('Filter');
});

//endpoint productos (dinamico)
router.get('/', (req, res) => {

  const products = [];
  const {size} = req.query;

  //tamaño para generar productos.
  const limit = size || 10;

  //Se crean productos con faker
  for (let i = 0 ; i < limit ; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    }
    )
  }
  //Es comun enviar un JSON para el front.
  res.json(products);
});


//producto id, se pone : porque es un parametro
router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    nane: 'Product 2',
    price: 3500,
  });
});


//POST para crear usuario

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'create',
    data:body //se retorna la respuesta.-
  });
});
module.exports = router;
