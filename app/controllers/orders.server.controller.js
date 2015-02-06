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