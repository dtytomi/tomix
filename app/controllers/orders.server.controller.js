'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Order'),
    _ = require('lodash');

exports.addToCart = function(req, res) {
  console.log('the whole body', req.body);
  console.log('state', req.body.state);
  var order = new Order({
      state: req.body.state
  });

  order.user = req.user;
  
  var goods = {
        sku: req.body.sku,
        name: req.body.name,
        retail_price: req.body.price
  };

  order.line_items.unshift(goods);

  order.save(function(err){
    if(err) {
      return res.send(400, {
        message: err
      });
    } else {
      res.json(order);
    }
  });
};

exports.list = function(req, res) {
  Order.find({}, function(err, orders){
    if(err) {
      return res.send(400, {
        message: err
      });
    } else {
        res.json(orders);
    }
  });
};

exports.read = function(req, res){
  res.json(req.order);
};

exports.update = function(req, res) {
  var order = req.order;

  order = _.extend(order, req.body);

  order.save(function(err, order){
    if (err) {
      return res.send(400, {
        message: err
      });
    } else {
      res.json(order);
    }
  });
};

exports.delete = function(req, res){
  var order = req.order;

  order.remove(function(err){
    if (err) {
      return res.send(400, {
        message: err
      });
    } else {
      res.json(order);
    }
  });
};

exports.orderById = function(req, res, next, id) {
  Order.findById(id).exec(function(err, order){
    if(err) return next(err);
    if (!order) return next(new Error('failed to load Order' +id));

    req.order = order;
    next();
  });
};

exports.hasAuthourization = function(req, res, next) {
  if(req.order.user.id !== req.user.id) {
      return res.send(403, 'User is not Authourized');
  }
  next();
};