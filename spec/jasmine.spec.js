'use strict';

describe('jasmine', function() {

  var jasmine;
  beforeEach(function() {
    jasmine = require('../lib/jasmine');
  });

  describe('Your first test', function() {

    it('does something meaningful', function() {
      expect(jasmine.prop1).toEqual('prop1');
    });

  });

});
