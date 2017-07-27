(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "number": "012",
    "name": "BBVA Bancomer, S.A.",
    "abreviate": "BBVA BANCOMER"
  },
  {
    "number": "014",
    "name": "Banco Santander, S.A.",
    "abreviate": "SANTANDER"
  },
  {
    "number": "019",
    "name": "Banco Nacional del Ejército, Fuerza Aérea y Armada, S.N.C.",
    "abreviate": "BANJERCITO"
  },
  {
    "number": "002",
    "name": "Banco Nacional de México, S.A.",
    "abreviate": "BANAMEX"
  },
  {
    "number": "021",
    "name": "HSBC México, S.A.",
    "abreviate": "HSBC"
  },
  {
    "number": "022",
    "name": "GE Money Bank, S.A.",
    "abreviate": "GE MONEY"
  },
  {
    "number": "030",
    "name": "Banco del Bajío, S.A.",
    "abreviate": "BAJÍO"
  },
  {
    "number": "032",
    "name": "IXE Banco, S.A.",
    "abreviate": "IXE"
  },
  {
    "number": "036",
    "name": "Banco Inbursa, S.A.",
    "abreviate": "INBURSA"
  },
  {
    "number": "037",
    "name": "Banco Interacciones, S.A.",
    "abreviate": "INTERACCIONES"
  },
  {
    "number": "042",
    "name": "Banca Mifel, S.A.",
    "abreviate": "MIFEL"
  },
  {
    "number": "044",
    "name": "Scotiabank Inverlat, S.A.",
    "abreviate": "SCOTIABANK"
  },
  {
    "number": "058",
    "name": "Banco Regional de Monterrey, S.A.",
    "abreviate": "BANREGIO"
  },
  {
    "number": "059",
    "name": "Banco Invex, S.A.",
    "abreviate": "INVEX"
  },
  {
    "number": "060",
    "name": "Bansi, S.A.",
    "abreviate": "BANSI"
  },
  {
    "number": "062",
    "name": "Banca Afirme, S.A.",
    "abreviate": "AFIRME"
  },
  {
    "number": "072",
    "name": "Banco Mercantil del Norte, S.A.",
    "abreviate": "BANORTE"
  },
  {
    "number": "103",
    "name": "American Express Bank (México), S.A.",
    "abreviate": "AMERICAN EXPRESS"
  },
  {
    "number": "112",
    "name": "Banco Monex, S.A.",
    "abreviate": "BMONEX"
  },
  {
    "number": "113",
    "name": "Banco Ve por Mas, S.A.",
    "abreviate": "VE POR MAS"
  },
  {
    "number": "127",
    "name": "Banco Azteca, S.A.",
    "abreviate": "AZTECA"
  },
  {
    "number": "128",
    "name": "Banco Autofin México, S.A.",
    "abreviate": "AUTOFIN"
  },
  {
    "number": "130",
    "name": "Banco Compartamos, S.A.",
    "abreviate": "COMPARTAMOS"
  },
  {
    "number": "131",
    "name": "Banco Ahorro Famsa, S.A.",
    "abreviate": "FAMSA"
  },
  {
    "number": "132",
    "name": "Banco Multiva, S.A.",
    "abreviate": "BMULTIVA"
  },
  {
    "number": "134",
    "name": "Banco Wal Mart de México Adelante, S.A.",
    "abreviate": "WAL-MART"
  },
  {
    "number": "135",
    "name": "Nacional Financiera, S.N.C.",
    "abreviate": "NAFIN"
  },
  {
    "number": "136",
    "name": "Banco Regional, S.A.",
    "abreviate": "REGIONAL"
  },
  {
    "number": "137",
    "name": "BanCoppel, S.A.",
    "abreviate": "BANCOPPEL"
  },
  {
    "number": "138",
    "name": "Banco Amigo, S.A.",
    "abreviate": "AMIGO"
  },
  {
    "number": "139",
    "name": "UBS Banco, S.A.",
    "abreviate": "UBS BANK"
  },
  {
    "number": "140",
    "name": "Banco Fácil, S.A.",
    "abreviate": "FÁCIL"
  },
  {
    "number": "143",
    "name": "Consultoría Internacional Banco, S.A.",
    "abreviate": "CIBanco"
  },
  {
    "number": "145",
    "name": "Banco BASE, S.A. de I.B.M.",
    "abreviate": "BBASE"
  },
  {
    "number": "147",
    "name": "Bankaool, S.A., Institución de Banca Múltiple",
    "abreviate": "BANKAOOL"
  },
  {
    "number": "150",
    "name": "Banco Inmobiliario Mexicano, S.A., Institución de Banca Múltiple",
    "abreviate": "BIM"
  },
  {
    "number": "166",
    "name": "Banco del Ahorro Nacional y Servicios Financieros, S.N.C.",
    "abreviate": "BANSEFI"
  }
]

},{}],2:[function(require,module,exports){
const banks = require('./banks.json');

exports.toJson = () => {
  return banks;
}

exports.fromIban = (clabe) => { 
  let mxnBank;
  banks.forEach((bank)=>{
    if (clabe.slice(0, 3) === bank.number) {
      mxnBank = bank;
    }
  })
  return mxnBank;
}

exports.isValid = (clabe) => {
  clabeLength = 18
  if (clabe.length  < clabeLength || clabe.length > clabeLength) return `CLABE length must be ${clabeLength} characters long.` 
  const digits = clabe.slice(0, (clabe.length-1)).split('');
  const wFactor = weight(digits);
  const moduleTen = digits.map((n, index) => { return calcModule((n * wFactor[index]), 10) });
  return clabe.slice(-1) == currentControlDigit(moduleTen)
} 

const currentControlDigit = function (arr) {
  const moduleSum = arr.reduce((sum, n) => { return sum + n });
  const digitControl = 10 - calcModule(moduleSum, 10);
  return digitControl 
}

const calcModule = function (n, x) {
  return n % x
}

const weight = function (clabe) {
  let wFactor = { 0: 3, 1: 7, 2: 1 };
  return clabe.map ((n, i) => { return wFactor[calcModule(i, 3)] })
}

},{"./banks.json":1}]},{},[2]);
