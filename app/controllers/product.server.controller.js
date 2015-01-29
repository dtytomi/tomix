'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.create = function(req, res) {
  console.log('I got called', req.body);

  var product = new Product(req.body);

  product.save(function(err) {
    if (err) {

      console.log(err);

      return res.send(400, {
        message: err
      });
    } else {
      res.jsonp(product);
    }
  });
};