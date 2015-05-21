'use strict';

var app = {
  Models: {},
  Collections: {},
  Views: {},
  Helpers: {
    formatPrice: function (price) {
      return '$' + price.toFixed(2);
    }
  },

  data: {
    packages: [
      {
        quantity: 10,
        name: '10 Unit Pack'
      }, {
        quantity: 20,
        name: '20 Unit Pack'
      }, {
        quantity: 30,
        name: '30 Unit Pack'
      }, {
        quantity: 40,
        name: '40 Unit Pack'
      }
    ],
    units: [
      {
        id: 1,
        name: 'Variety 1',
        price: 5
      }, {
        id: 2,
        name: 'Variety 2',
        price: 4
      }, {
        id: 3,
        name: 'Variety 3',
        price: 2
      }, {
        id: 4,
        name: 'Variety 4',
        price: 1.5
      }, {
        id: 5,
        name: 'Variety 5',
        price: 1
      }
    ],
    features: [
      {
        id: 1,
        name: 'Awesome Feature #1',
        price: 20
      }, {
        id: 2,
        name: 'Awesome Feature #2',
        price: 15
      }, {
        id: 3,
        name: 'Awesome Feature #3',
        price: 40
      }
    ]
  },
  initialize: function () {
    /**
     * Fire things off by passing sample data to views. In a full-
     * scale system this might be replaced with calls the server.
     */
    var plansView = new app.Views.PackagesView(this.data.packages);
    var unitsView = new app.Views.UnitsView(this.data.units);
    var featuresView = new app.Views.FeaturesView(this.data.features);
    var checkoutView = new app.Views.CheckoutView();
  }
};