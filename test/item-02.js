"use strict";

var assert = require('chai').assert;

/* eslint-disable */

//Item 2 - Understanding floating point numbers
describe('All numbers are typeof "number"', function() {
    var number;
    it(number = 17, function() { assert.equal('number', typeof number); });
    it(number = 98.6, function() { assert.equal('number', typeof number); });
    it(number = -2.1, function() { assert.equal('number', typeof number); });
});

describe('Most arithmetic operators work with integers', function() {
    it(0.1 + ' * ' + 1.9 + ' = ' + 0.19, function() { assert.equal(0.19, 0.1 * 1.9); });
    it(-99 + ' + ' + 100 + ' = ' + 1, function() { assert.equal(1, -99 + 100); });
    it(21 + ' - ' + 12.3 + ' = ' + 8.7, function() { assert.equal(8.7, 21 - 12.3); });
    it(2.5 + ' / ' + 5 + ' = ' + 0.5, function() { assert.equal(0.5, 2.5 / 5); });
    it(21 + ' % ' + 8 + ' = ' + 5, function() { assert.equal(5, 21 % 8); });
});

describe('Bitwise operators are special: they converts to integer before applying', function() {
    it(8 + ' | ' + 1 + ' = ' + 9, function() { assert.equal(9, 8 | 1); });
});

describe('Bitwise operators works with binaries', function() {
    it('(1).toString(2) =    1', function() { assert.equal(1, (1).toString(2)); });
    it('(8).toString(2) = 1000', function() { assert.equal(1000, (8).toString(2)); });
    it('(9).toString(2) = 1001', function() { assert.equal(1001, (9).toString(2)); });
    it('parseInt(1001, 2) = 9', function() { assert.equal(9, parseInt(1001, 2)); });
});

describe('Floating point numbers can produce inaccurate results', function() {
    it('0.1 + 0.2 - 0.3 = 0? No! = 5.551115123125783e-17', function() { assert.equal(5.551115123125783e-17, 0.1 + 0.2 - 0.3); });
    it('(0.1 + 0.2) + 0.3 = 0.6000000000000001', function() { assert.equal(0.6000000000000001, (0.1 + 0.2) + 0.3); });
    it('0.1 + (0.2 + 0.3) = 0.6', function() { assert.equal(0.6, 0.1 + (0.2 + 0.3)); });
});

describe('In these cases, better to use integer numbers; e.g. use cents instead of dollars', function() {
    it('(10 + 20) + 30 = 60', function() { assert.equal(60, (10 + 20) + 30); });
    it('10 + (20 + 30) = 60', function() { assert.equal(60, 10 + (20 + 30)); });
});


/* eslint-enable */