'use strict';

var orders = require('../../app/controllers/orders'),
    users = require('../../app/controllers/users');

module.exports =function(app) {
  app.route('/cart')
     .get(orders.list)
     .post(users.requiresLogin, orders.addToCart);

  app.route('/cart/:orderId')
     .get(orders.read)
     .put(users.requiresLogin, orders.hasAuthourization, orders.update)
     .delete(users.requiresLogin, orders.hasAuthourization, orders.delete);

  app.param('orderId', orders.orderById);
};