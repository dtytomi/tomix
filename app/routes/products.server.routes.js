'use strict';

var products =  require('../../app/controllers/products');

module.exports = function(app) {
  app.route('/products')
     .post(products.create)
     .get(products.list);

  app.route('/products/:productId')
     .get(products.read)
     .put(products.update)
     .delete(products.delete);


  app.param('productId', products.productById);
};