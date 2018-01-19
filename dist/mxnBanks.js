(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MxnBanks = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "number": "012",
    "name": "BBVA Bancomer, S.A.",
    "abbreviate": "BBVA BANCOMER"
  },
  {
    "number": "014",
    "name": "Banco Santander, S.A.",
    "abbreviate": "SANTANDER"
  },
  {
    "number": "019",
    "name": "Banco Nacional del Ejército, Fuerza Aérea y Armada, S.N.C.",
    "abbreviate": "BANJERCITO"
  },
  {
    "number": "002",
    "name": "Banco Nacional de México, S.A.",
    "abbreviate": "BANAMEX"
  },
  {
    "number": "021",
    "name": "HSBC México, S.A.",
    "abbreviate": "HSBC"
  },
  {
    "number": "022",
    "name": "GE Money Bank, S.A.",
    "abbreviate": "GE MONEY"
  },
  {
    "number": "030",
    "name": "Banco del Bajío, S.A.",
    "abbreviate": "BAJÍO"
  },
  {
    "number": "032",
    "name": "IXE Banco, S.A.",
    "abbreviate": "IXE"
  },
  {
    "number": "036",
    "name": "Banco Inbursa, S.A.",
    "abbreviate": "INBURSA"
  },
  {
    "number": "037",
    "name": "Banco Interacciones, S.A.",
    "abbreviate": "INTERACCIONES"
  },
  {
    "number": "042",
    "name": "Banca Mifel, S.A.",
    "abbreviate": "MIFEL"
  },
  {
    "number": "044",
    "name": "Scotiabank Inverlat, S.A.",
    "abbreviate": "SCOTIABANK"
  },
  {
    "number": "058",
    "name": "Banco Regional de Monterrey, S.A.",
    "abbreviate": "BANREGIO"
  },
  {
    "number": "059",
    "name": "Banco Invex, S.A.",
    "abbreviate": "INVEX"
  },
  {
    "number": "060",
    "name": "Bansi, S.A.",
    "abbreviate": "BANSI"
  },
  {
    "number": "062",
    "name": "Banca Afirme, S.A.",
    "abbreviate": "AFIRME"
  },
  {
    "number": "072",
    "name": "Banco Mercantil del Norte, S.A.",
    "abbreviate": "BANORTE"
  },
  {
    "number": "103",
    "name": "American Express Bank (México), S.A.",
    "abbreviate": "AMERICAN EXPRESS"
  },
  {
    "number": "112",
    "name": "Banco Monex, S.A.",
    "abbreviate": "BMONEX"
  },
  {
    "number": "113",
    "name": "Banco Ve por Mas, S.A.",
    "abbreviate": "VE POR MAS"
  },
  {
    "number": "127",
    "name": "Banco Azteca, S.A.",
    "abbreviate": "AZTECA"
  },
  {
    "number": "128",
    "name": "Banco Autofin México, S.A.",
    "abbreviate": "AUTOFIN"
  },
  {
    "number": "130",
    "name": "Banco Compartamos, S.A.",
    "abbreviate": "COMPARTAMOS"
  },
  {
    "number": "131",
    "name": "Banco Ahorro Famsa, S.A.",
    "abbreviate": "FAMSA"
  },
  {
    "number": "132",
    "name": "Banco Multiva, S.A.",
    "abbreviate": "BMULTIVA"
  },
  {
    "number": "134",
    "name": "Banco Wal Mart de México Adelante, S.A.",
    "abbreviate": "WAL-MART"
  },
  {
    "number": "135",
    "name": "Nacional Financiera, S.N.C.",
    "abbreviate": "NAFIN"
  },
  {
    "number": "136",
    "name": "Banco Regional, S.A.",
    "abbreviate": "REGIONAL"
  },
  {
    "number": "137",
    "name": "BanCoppel, S.A.",
    "abbreviate": "BANCOPPEL"
  },
  {
    "number": "138",
    "name": "Banco Amigo, S.A.",
    "abbreviate": "AMIGO"
  },
  {
    "number": "139",
    "name": "UBS Banco, S.A.",
    "abbreviate": "UBS BANK"
  },
  {
    "number": "140",
    "name": "Banco Fácil, S.A.",
    "abbreviate": "FÁCIL"
  },
  {
    "number": "143",
    "name": "Consultoría Internacional Banco, S.A.",
    "abbreviate": "CIBanco"
  },
  {
    "number": "145",
    "name": "Banco BASE, S.A. de I.B.M.",
    "abbreviate": "BBASE"
  },
  {
    "number": "147",
    "name": "Bankaool, S.A., Institución de Banca Múltiple",
    "abbreviate": "BANKAOOL"
  },
  {
    "number": "150",
    "name": "Banco Inmobiliario Mexicano, S.A., Institución de Banca Múltiple",
    "abbreviate": "BIM"
  },
  {
    "number": "156",
    "name": "Banco Sabadell, S.A., Institución de Banca Múltiple",
    "abbreviate": "SABADELL"
  },
  {
    "number": "166",
    "name": "Banco del Ahorro Nacional y Servicios Financieros, S.N.C.",
    "abbreviate": "BANSEFI"
  }
]

},{}],2:[function(require,module,exports){
'use strict';

var banks = require('./banks.json');

exports.toJson = function () {
  return banks;
};

exports.fromIban = function (clabe) {
  var mxnBank = void 0;
  banks.forEach(function (bank) {
    if (clabe.slice(0, 3) === bank.number) {
      mxnBank = bank;
    }
  });
  return mxnBank;
};

exports.isValid = function (clabe) {
  var clabeLength = 18;
  if (clabe.length < clabeLength || clabe.length > clabeLength) return false;
  if (!this.fromIban(clabe)) return false;
  return clabe.slice(-1) == calcChecksum(clabe);
};

var calcChecksum = function calcChecksum(clabeNum) {
  var sum = 0;
  clabeNum.split('').slice(0, 17).forEach(function (digit, index) {
    sum += parseInt(digit) * [3, 7, 1][index % 3] % 10;
  });
  return (10 - sum % 10) % 10;
};

},{"./banks.json":1}]},{},[2])(2)
});