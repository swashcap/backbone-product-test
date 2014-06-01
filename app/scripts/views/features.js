'use strict';

var app = app || {};

app.FeaturesView = Backbone.View.extend({
  el: '#features',
  featureTemplate: _.template($('#template-feature').html()),

  initialize: function (features) {
    this.features = features;
    this.render();
  },

  render: function () {
    _.each(this.features, function (feature) {
      this.renderOne(feature);
    }, this);
  },

  renderOne: function (feature) {
    this.$el.append(this.featureTemplate(feature));
  }
})