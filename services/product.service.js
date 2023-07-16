const {faker} = require('@faker-js/faker');


//Servicio para productos
class ProductsService{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    //tamaño para generar productos.
    const limit = 100;

    //Se crean productos con faker
    for (let i = 0 ; i < limit ; i++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      }
      )
    }
  }

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductsService;
