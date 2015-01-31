'use strict';

var product =  require('../controllers/product.server.controller.js');

module.exports = function(app) {
  app.post('/products', product.create);
  app.get('/products', product.list);
}