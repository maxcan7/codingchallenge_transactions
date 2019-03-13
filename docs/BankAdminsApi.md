# TransactionsApi.BankAdminsApi

All URIs are relative to *https://virtserver.swaggerhub.com/maxcan7/codingchallenge_transaction/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pushTransaction**](BankAdminsApi.md#pushTransaction) | **POST** /transfer | pushes a transaction


<a name="pushTransaction"></a>
# **pushTransaction**
> pushTransaction(opts)

pushes a transaction

Pushes a transaction

### Example
```javascript
var TransactionsApi = require('transactions_api');

var apiInstance = new TransactionsApi.BankAdminsApi();

var opts = { 
  'transactions': new TransactionsApi.Transactions() // Transactions | Transaction reference to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pushTransaction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactions** | [**Transactions**](Transactions.md)| Transaction reference to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

