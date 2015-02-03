'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trackingSchema = new Schema({
    company: {
      type: String,
      default: ''
    },
    tracking_number: {
      type: Number,
      min: 0
    },
    status: {
      type: String,
      default: ''
    }
});

var shippingSchema = new Schema({
     street: {
      type: String,
      default: ''
     },
     city: {
      type: String,
      default: ''
     },
     state: {
      type: String,
      default: ''
     },
     zip: {
      type: Number,
     },
    tracking: [trackingSchema]
});

var paymentSchema = new Schema({
    pament_method: {
      type: String,
      default: ''
    },
    transaction_id: {
      type: String,
      default: ''
    }
});

var productSchema = new Schema({
  sku: {} ,
});

var orderSchema = new Schema({
    created: {
      type: Date,
      default: Date.now
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    state: {
      type: String,
      default: ''
    },
    line_items: [productSchema],
    shipping: [shippingSchema]

});

mongoose.model('Order', orderSchema);