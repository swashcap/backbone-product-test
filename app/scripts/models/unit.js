'use strict';

var app = app || {};

app.Models.Unit = Backbone.Model.extend({
  defaults: {
    name: '',
    quantity: 0,
    price: 0
  }
});