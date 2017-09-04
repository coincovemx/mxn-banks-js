const mxnBanks = require('../lib/mxnBanks.js');
const scotiaBank =   {
    number: "044",
    name: "Scotiabank Inverlat, S.A.",
    abreviate: "SCOTIABANK"
  }
let banks = require('../lib/banks.json');

describe('mxnBanks Library', () => {
	it('should load the banks', () => {
		expect(mxnBanks.toJson()).toBe(banks);
	})
  let validClabes = [
    '002073662461479944',
    '012098011316193496',
    '014427566437837360',
    '137061102677089112'
  ]
  validClabes.forEach(function(n) {
    it('Valid should return true ', () => {
      let valid = mxnBanks.isValid(n)
      expect(valid).toBe(true)
    })
  })
  let invalidClabes = [
   '002073662461479942',
   '012098011316193492',
   '014427566437837362',
   '137061102677089111',
   '555555555555555555',
   '666666666666666660',
  ]
  invalidClabes.forEach(function(n) {
    it('Valid should return false ', () => {
      let valid = mxnBanks.isValid(n)
      expect(valid).toBe(false)
    })
  })
	it('Valid should return false ', () => {
		let valid = mxnBanks.isValid('002073560102605921')
		expect(valid).toBe(false)
	})

	it('Valid should return error if clabe.length < 18 ', () => {
		expect(mxnBanks.isValid('04432001004481682')).toBe(false)
		expect(mxnBanks.isValid('044324481682')).toBe(false)
	})
})
