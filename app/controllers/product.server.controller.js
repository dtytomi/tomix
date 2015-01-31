'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.create = function(req, res) {
  console.log('I got called', req.body);

  var product = new Product(req.body);

  product.save(function(err) {
    if (err) {

      return res.send(400, {
        message: err
      });
    } else {

      res.json(product);
    }
  });
};

exports.list = function(req, res) {
  Product.find({}, function(err, products){
    if (err) {
      return res.send(400, {
        message: err
      })
    } else {

      return res.send(products)
    }
  });
};