'use strict';

var app = app || {};

app.PackagesView = Backbone.View.extend({
  el: '#packages',

  initialize: function (packs) {
    this.packs = packs;
    this.render();
  },

  events: {
    'click input': 'changePackage'
  },

  render: function () {
    _.each(this.packs, function(pack) {
      this.renderOne(pack);
    }, this);
  },

  renderOne: function (pack) {
    var packageView = new app.PackageView(pack);

    this.$el.append(packageView.render().el);
  },

  changePackage: function (e) {
    // console.log(e.target.value);
  }
});