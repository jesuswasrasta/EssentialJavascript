"use strict";

var assert = require('chai').assert;

/* eslint-disable */

//Item 3 - Beware of Implicit Coercions 
describe('Implicit conversion of bools', function() {
    it('3 + true = 4', function() { assert.equal(4, 3 + true); });
});


/* eslint-enable */