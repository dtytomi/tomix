'use strict';

var users = require('../../app/controllers/users'),
    products =  require('../../app/controllers/products');

module.exports =function(app) {

  app.route('/admin/product')
     .get(products.list)
     .post(users.requiresLogin, products.create);

  app.route('/admin/product/productId')
     .get(products.read)
     .put(users.requiresLogin, products.hasAuthourization, products.update)
     .delete(users.requiresLogin, products.hasAuthourization, products.delete);

  app.param('productId', products.productById);
};