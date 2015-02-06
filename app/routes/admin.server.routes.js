'use strict';

var users = require('../../app/controllers/users'),
    products =  require('../../app/controllers/products');

module.exports =function(app) {

  app.route('/admin/add_product')
     .post(products.create);
};