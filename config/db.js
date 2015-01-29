'use strict'

var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'product');
var product = require('../app/models/product.server.js');
var Product = db.model('Product', product);

db.on('error', function() {
    console.log('cannot connect to database');
});

db.once('open', function(){
    console.log('Mongo working propperly');
});