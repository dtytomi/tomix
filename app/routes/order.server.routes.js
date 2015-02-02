'use strict';

var orders = require('../../app/controllers/orders');

module.exports =function(app) {
  app.route('/order')
     .post();
};