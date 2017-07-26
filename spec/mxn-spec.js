const mxnBanks = require('../lib/mxnBanks.js');
let banks = require('../lib/banks.json');


describe('mxnBanks Library', () => {
	it('should load the banks', () => {
		console.log(mxnBanks.fromIban("01211111"))
		expect(mxnBanks.toJson()).toBe(banks);
	})
})