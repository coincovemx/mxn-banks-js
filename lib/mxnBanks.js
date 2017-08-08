const banks = require('./banks.json');

exports.toJson = () => {
  return banks;
}

exports.fromIban = (clabe) => {
  let mxnBank;
  banks.forEach( (bank)=> {
    if (clabe.slice(0, 3) === bank.number) {
      mxnBank = bank;
    }
  })
  return mxnBank;
}

exports.isValid = (clabe) => {
  const clabeLength = 18
  if (clabe.length  < clabeLength || clabe.length > clabeLength) return false
  return clabe.slice(-1) == calcChecksum(clabe)
}

const calcChecksum  = function(clabeNum) {
  let sum = 0;
  clabeNum.split('').slice(0, 17).forEach( (digit, index) => {
    sum += (parseInt(digit) * [3, 7, 1][index % 3]) % 10;
  });
  return (10 - (sum % 10)) % 10;
}
