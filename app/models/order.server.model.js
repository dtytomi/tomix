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
     user: {
      type: Schema.ObjectId,
      ref: 'User'
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

var checkoutSchema = new Schema({
    created: {
      type: Date,
      default: Date.now
    },
    shipping: [shippingSchema]
});

mongoose.model('Order', checkoutSchema);