'use strict';

var printNumberBytes = require('./index');
var expect = require('chai').expect;

describe('test print number bytes', function() {
	it('printNumberBytes(1) should return 0011111111110000000000000000000000000000000000000000000000000000', function() {
		var res = printNumberBytes(1);
		expect(res).to.be.equal('0011111111110000000000000000000000000000000000000000000000000000');
	})

	it('printNumberBytes(1,{radix : 16 , separate : ","}) should return 3f,f0,00,00,00,00,00,00', function() {
		var res = printNumberBytes(1, {
			radix: 16,
			separate: ','
		});
		
		expect(res).to.be.equal('3f,f0,00,00,00,00,00,00');
	})
	it('printNumberBytes(1,{radix : 10 , separate : ","}) should return 63,240,0,0,0,0,0,0', function() {
		var res = printNumberBytes(1, {
			radix: 10,
			separate: ','
		});

		expect(res).to.be.equal('63,240,0,0,0,0,0,0');
	})

	it('printNumberBytes("aaa") should throw Error', function() {
		var fn = function() {
			printNumberBytes('aaa')
		}

		expect(fn).to.throw(/not a number/);
	})

	it('printNumberBytes(1,{radix : 32 , separate : ","}) should throw Error', function() {
		var fn = function() {
			printNumberBytes(1, {
				radix: 32,
				separate: ","
			})
		}

		expect(fn).to.throw(/must be 2 or 10 or 16/);
	})

});