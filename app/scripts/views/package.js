/* global app*/

'use strict';

app.Views.PackageView = Backbone.View.extend({
  template: _.template($('#template-package').html()),

  initialize: function (pack) {
    this.pack = pack;
  },

  render: function () {
    this.$el.html(this.template(this.pack));

    return this;
  }
});