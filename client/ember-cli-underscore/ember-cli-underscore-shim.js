(function() {
  /* globals define, d3 */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('underscore', { 'default': _ });
})();
