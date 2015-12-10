'use strict';

module.exports = function(number, option) {
	var width = 8;
	//generate option
	option = {
		radix: option && option.radix ? option.radix : 2,
		separate: option && option.separate ? option.separate : ''
	}

	if (option.radix === 2) {
		width = 8;
	} else if (option.radix === 10) {
		width = 0; //no need to fill zero
	} else if (option.radix === 16) {
		width = 2;
	} else {
		throw Error('option.radix must be 2 or 10 or 16');
	}

	var number = +number;
	if (isNaN(number)) {
		throw Error('number : ' + number + ' is not a number');
	}

	var buf = new Buffer(8);
	buf.writeDoubleBE(number);

	var bits = [];
	for (var i = 0; i < 8; i++) {
		var bit = buf.readUInt8(i);
		bits.push(zeroFill(bit.toString(option.radix), width));
	}

	return bits.join(option.separate);

}

var isNaN = Number.isNaN || function(value) {
	return typeof value === "number" && isNaN(value);
}

/**
 * fill zero with given width
 * width = 0 return number direct.
 */
function zeroFill(number, width) {
	if (!width) {
		return number + "";
	}

	width -= number.toString().length;
	if (width > 0) {
		return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
	}

	return number + "";
}