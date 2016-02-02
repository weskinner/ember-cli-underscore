/*jshint node:true*/
module.exports = {
  description: 'bower install underscore',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
  afterInstall: function(options) {
    return this.addBowerPackageToProject('underscore');
  }
};
