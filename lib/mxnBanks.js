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
  if (clabe.length < 18) return "CLABE is too short"
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
