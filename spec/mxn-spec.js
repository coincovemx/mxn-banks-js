const mxnBanks = require('../lib/mxnBanks.js');
const scotiaBank =   {
    number: "044",
    name: "Scotiabank Inverlat, S.A.",
    abreviate: "SCOTIABANK"
  }
let banks = require('../lib/banks.json');

describe('mxnBanks Library', () => {
	it('should load the banks', () => {
		console.log()
		expect(mxnBanks.toJson()).toBe(banks);
	})

	it('should return bank object', () => {
		let fromIban = mxnBanks.fromIban('044320010044816821')
		expect(JSON.stringify(fromIban)).toBe(JSON.stringify(scotiaBank))
	})	

	it('Valid should return true ', () => {
		let valid = mxnBanks.valid('044320010044816821')
		expect(valid).toBe(true)
	})	

	it('Valid should return false ', () => {
		let valid = mxnBanks.valid('044320010044816822')
		expect(valid).toBe(false)
	})

	it('Valid should return error if clabe.length < 18 ', () => {
		let valid = mxnBanks.valid('04432001004481682')
		expect(valid).toMatch('CLABE is too short')
	})
})
