# TransactionsApi.BankAdminApi

All URIs are relative to *https://virtserver.swaggerhub.com/maxcan7/codingchallenge_transaction/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTransactions**](BankAdminApi.md#searchTransactions) | **GET** /transfer | searches account transactions


<a name="searchTransactions"></a>
# **searchTransactions**
> [Transactions] searchTransactions(opts)

searches account transactions

By passing in the appropriate options, you can search for transaction history 

### Example
```javascript
var TransactionsApi = require('transactions_api');

var apiInstance = new TransactionsApi.BankAdminApi();

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up transactions
  'skip': 56, // Number | number of transactions to skip for pagination
  'limit': 56 // Number | maximum number of transactions to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchTransactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| pass an optional search string for looking up transactions | [optional] 
 **skip** | **Number**| number of transactions to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of transactions to return | [optional] 

### Return type

[**[Transactions]**](Transactions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

