/* global app*/

'use strict';

app.Views.AppView = Backbone.View.extend({
  el: '#app',

  events: {
    'click #units input': 'calculateTotal',
    'change #packages input': 'changePackage'
  },

  calculateTotal: function (e) {
    console.log(e);

    // var total = 0;
    // $.each($('#units input'), function (i, el) {
    //   console.log('test');
    // });
  },

  changePackage: function (e) {
    console.log(e);
  }
});