'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),        
     _ = require('lodash');

exports.create = function(req, res) {
  var product = new Product(req.body);
      product.user = req.user;

  var category = {
    category_name: req.body.category_name
  };
     product.categories.unshift(category);

  var image = {
    kind: req.body.kind,
    url: req.body.url
  };
  product.images.unshift(image);

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

exports.delete = function(req, res){
  var product = req.product;

  product.remove(function(err){
    if (err) {
        return res.send(400, {
          message: err
        });
    } else {
        res.json(product);
    }
  });
};

exports.read = function(req, res){
  res.json(req.product);
};

exports.list = function(req, res) {
  Product.find({}, function(err, products){
    if (err) {
      return res.send(400, {
        message: err
      });
    } else {

      return res.send(products);
    }
  });
};

exports.update = function(req, res) {
  var product = req.product;

  product = _.extend(product, req.body);

  product.save(function(err){
    if(err) {
      return res.send(400, {
        message: err
      });
    } else {
      res.json(product);
    }
  });
};

exports.productById = function(req, res, next, id) {
  Product.findById(id).exec(function(err, product){
    if(err) return next(err);
    if(!product) return next(new Error('failed to load product' + id));
    req.product = product;
    next();
  });
};

exports.hasAuthourization = function(req, res, next){
  if( req.product.user.id !== req.user.id){
    return res.send(403, 'User is not Authourized');
  }
  next();
};