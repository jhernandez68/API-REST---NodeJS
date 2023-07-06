const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const express = require('express');


function routerApi(app){
  //Ruta maestra
  const router = express.Router();
  app.use('/api/v1', router);

  //Se usa la ruta maestra con router.
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
