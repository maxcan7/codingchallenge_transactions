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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Balances', 'model/Transactions', 'api/BankAdminApi', 'api/BankAdminsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Balances'), require('./model/Transactions'), require('./api/BankAdminApi'), require('./api/BankAdminsApi'));
  }
}(function(ApiClient, Balances, Transactions, BankAdminApi, BankAdminsApi) {
  'use strict';

  /**
   * This_is_an_API_designed_for_a_bank_transactions_coding_challenge__It_has_not_been_properly_tested_and_was_designed_more_as_a_proof_of_concept.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TransactionsApi = require('index'); // See note below*.
   * var xxxSvc = new TransactionsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TransactionsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TransactionsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TransactionsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Balances model constructor.
     * @property {module:model/Balances}
     */
    Balances: Balances,
    /**
     * The Transactions model constructor.
     * @property {module:model/Transactions}
     */
    Transactions: Transactions,
    /**
     * The BankAdminApi service constructor.
     * @property {module:api/BankAdminApi}
     */
    BankAdminApi: BankAdminApi,
    /**
     * The BankAdminsApi service constructor.
     * @property {module:api/BankAdminsApi}
     */
    BankAdminsApi: BankAdminsApi
  };

  return exports;
}));
