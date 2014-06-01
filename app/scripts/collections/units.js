'use strict';

var app = app || {};

app.Collections.Units = Backbone.Collection.extend({
  model: app.Models.Unit
});