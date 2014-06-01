/* global app*/

'use strict';

app.Views.UnitsView = Backbone.View.extend({
  el: '#units',

  initialize: function (units) {
    this.collection = new app.Collections.Units(units);
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
    var unitView = new app.Views.UnitView({model: unit});

    this.$el.append(unitView.render().el);

    return this;
  }
});