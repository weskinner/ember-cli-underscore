/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-underscore',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/underscore/underscore.js');
    app.import('vendor/ember-cli-underscore/ember-cli-underscore-shim.js', {
      exports: {
        underscore: ['default']
      }
    });
  },

  treeForVendor: function() {
    return path.join(__dirname, 'client');
  }
};