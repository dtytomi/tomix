'use strict';

var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

var Images = new Schema({
    kind: {
      type: String,
      enum: ['thumbnail','catlog', 'details', 'zoom'],
      required: true
    },
    url: {
      type: String,
      required: true
    }
});

var Category = new Schema({
    category_name: {
      type: String,
      default: '' 
    }
});

var productSchema = new Schema({
  created : {
    type: Date,
    default : Date.now
  },
  name: {
    type: String,
    default: ''
  },
  sku: {
    type: String,
    required: true,
    default: '',
    validate: [/[0-9a-zA-Z]/, 'Product should have only letters and number']

  },
  price : {
    type: Number,
    required: true,
    min: 0
  },  
  description: {
    type: String
  },
  categories: [Category],
  images: [Images],
  user: {
    type: Schema.ObjectId,
    ref: 'Admin'
  }
});

mongoose.model('Product', productSchema);