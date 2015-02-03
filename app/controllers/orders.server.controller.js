'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.Schema,
    _ = require('lodash');

exports.create = function(req, res) {
  var order = new Order(req.body);

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