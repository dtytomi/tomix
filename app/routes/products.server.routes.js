'use strict';

var products =  require('../../app/controllers/products'),
    users = require('../../app/controllers/users');

module.exports = function(app) {
  app.route('/products')
     .get(products.list);

  app.route('/products/:productId')
     .get(products.read);

  app.param('productId', products.productById);
};