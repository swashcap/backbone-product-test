/* global _,Backbone */

'use strict';

var app = app || {};

app.UnitsView = Backbone.View.extend({
  el: '#units',

  initialize: function (units) {
    this.collection = new app.Units(units);
    this.render();
  },

  events: {

  },

  render: function () {
    this.collection.each(function(unit) {
      this.renderOne(unit);
    }, this);
  },

  renderOne: function (unit) {
    var unitView = new app.UnitView({model: unit});

    this.$el.append(unitView.render().el);

    return this;
  }
});