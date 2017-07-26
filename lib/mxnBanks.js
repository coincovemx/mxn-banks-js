const fs = require('fs'); 
let banks = require('./banks.json');

exports.toJson = () => {
  return banks
}

exports.fromIban = (clabe) => {
  console.log(clabe.slice(0, 3));
  banks.forEach((bank)=>{
    if (clabe.slice(0, 3) === bank.number) {
      return bank
    }
  })
}