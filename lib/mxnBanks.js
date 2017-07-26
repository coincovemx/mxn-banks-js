const fs = require('fs'); 
let banks = require('./banks.json');

exports.toJson = () => {
  return banks
}

exports.fromIban = (clabe) => { 
  let mxnBank;
  banks.forEach((bank)=>{
    if (clabe.slice(0, 3) === bank.number) {
      mxnBank = bank
    }
  })
  return mxnBank
}

exports.valid = (clabe) =>{
  if (clabe.length < 18) return "CLABE is too short"
  const wFactor = [3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7];
  const digits = clabe.slice(0, (clabe.length-1)).split('');
  let moduleTen = digits.map((n, index) => {
    return module(n * wFactor[index]);
  })
  if (clabe.slice(-1) == currentControlDigit(moduleTen)){
    return true
  } else {
    return false
  }
} 

function currentControlDigit(arr) {
  let moduleSum = arr.reduce((sum, n) => {
    return sum + n
  })
  let digitControl = 10 - module(moduleSum)
  return module(digitControl) 
}

function module(n) {
  return n % 10
}
