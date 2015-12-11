# number-bytes
[![Build Status](https://travis-ci.org/sjfkai/number-bytes.svg?branch=master)](https://travis-ci.org/sjfkai/number-bytes)
[![npm version](https://badge.fury.io/js/number-bytes.svg)](https://badge.fury.io/js/number-bytes)

Get Number(double) bytes string.

As you know JavaScript save a Number as a [Double-precision floating-point](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)


# usage
```
npm install number-bytes
```

in your `.js` file

```
var numberBytes = require('number-bytes');

console.log(numberBytes(1));
//0011111111110000000000000000000000000000000000000000000000000000

console.log(numberBytes(1,{
    radix : 16,
    separate : ','
}));
//3f,f0,00,00,00,00,00,00
```
# options
 `radix` :  the base to use for representing numeric values
            2,10 and 16 was optioned default to be 2.

 `separate` : separate between each byte.

 *tips:* when radix equals 2 or 16 , the width of each byte to dispaly was fixed to 4( for radix 2 ) or 2( for radix 16 ).

# LICENSE
MIT
