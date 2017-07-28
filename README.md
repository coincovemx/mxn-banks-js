# mxn-banks [![Build Status](https://secure.travis-ci.org/aldo/mxn-banks.png?branch=master)](http://travis-ci.org/aldo/mxn-banks)

Get mexican banks from IBAN

## Getting Started
Install the node module with: `npm install mxn-banks`
Install the bower package with: `bower install mxn-banks`

```javascript
var MxnBanks = require('mxn-banks'); // nodejs
MxnBanks is defined in the window object // Bower
```
## Examples
```javascript
MxnBanks.toJson(); // "Return an array of objects with all banks."
// The isValid function calculates the control digit. 
MxnBanks.isValid('002180700866064000') // True
var bank = MxnBanks.fromIban('002180700866064000'); 
// {number: "002", name: "Banco Nacional de México, S.A.", abreviate: "BANAMEX"}
bank.name // "Banco Nacional de México, S.A."
bank.abreviate // "BANAMEX"
bank.number // "002"
```

## License
Copyright (c) 2017 aldosolorzano  
Licensed under the MIT license.
