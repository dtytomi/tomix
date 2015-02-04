'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.Schema,
    _ = require('lodash');

exports.addToCart = function(req, res) {
  var order = new Order(req.body.state);
  var goods = {
        sku: req.body.sku,
        name: req.body.name,
        retail_price: req.body.price
  };

  order.line_item.unshift(goods);

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