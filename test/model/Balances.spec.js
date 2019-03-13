/**
 * Transactions API
 * This is an API designed for a bank transactions coding challenge. It has not been properly tested and was designed more as a proof of concept
 *
 * OpenAPI spec version: 1.0.0
 * Contact: maxcan7@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TransactionsApi);
  }
}(this, function(expect, TransactionsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TransactionsApi.Balances();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Balances', function() {
    it('should create an instance of Balances', function() {
      // uncomment below and update the code to test Balances
      //var instance = new TransactionsApi.Balances();
      //expect(instance).to.be.a(TransactionsApi.Balances);
    });

    it('should have the property accountNr (base name: "account nr")', function() {
      // uncomment below and update the code to test the property accountNr
      //var instance = new TransactionsApi.Balances();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new TransactionsApi.Balances();
      //expect(instance).to.be();
    });

  });

}));
