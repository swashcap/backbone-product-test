/* global app*/

'use strict';

app.Views.UnitView = Backbone.View.extend({
  template: _.template($('#template-unit').html()),

  initialize: function () {
    // this.listenTo(this.model, 'change', this.test);
  },

  // events: {
  //   'change input': 'setQuantity'
  // },

  render: function () {
    var modelJSON = _.extend(this.model.toJSON(), {
      price: app.Helpers.formatPrice(this.model.get('price'))
    });

    this.$el.html(this.template(modelJSON));

    return this;
  },

  setQuantity: function (e) {
    var quantity = e.target.value;

    this.model.set('quantity', quantity);
  }
});