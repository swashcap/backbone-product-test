/* global app*/

'use strict';

app.Views.CheckoutView = Backbone.View.extend({
  el: '#checkout',
  template: _.template($('#template-checkout').html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template({
      total: app.Helpers.formatPrice(0)
    }));
  }
});