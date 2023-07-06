const express = require('express');

const routerApi = require('./routes'); //Se trae el archivo con las rutas

const app = express();//Se crea la app

const port = 3500;//El puerto en el que corre


//Middleware para POST
app.use(express.json());

//Se define una ruta
app.get('/', (req, res) => { //el callback siempre tiene dos parametros - req y res
  res.send('Hola Mundo con express!'); //se envia un string
});


//El puerto en que se escucha
app.listen(port, () => {
  console.log('Servidor corriendo en el puerto', port);
});

routerApi(app);
