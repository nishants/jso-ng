var expect          = require('chai').expect,
    helper          = require("./support/test-helper"),
    STANDALONE_PATH = '../src/jeyson-standalone.js',
    setup           = function(config){
      config.getTemplate = helper.getTemplate
      return config;
    };


describe('Jeyson Standalone Script Specs', function() {
  before(function(){
    require(STANDALONE_PATH);
  });

  helper.specs().forEach(function(spec){
    it(spec.filename, function () {
      expect(Jeyson.parse(spec.scope, spec.template, setup(spec.config))).to.eql(spec.result);
    });
  });
});
