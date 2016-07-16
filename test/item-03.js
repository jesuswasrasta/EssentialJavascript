"use strict";

var assert = require('chai').assert;

/* eslint-disable */

//Item 3 - Beware of Implicit Coercions 
describe('Implicit conversion of bools', function() {
    it('3 + true = 4', function() { assert.equal(4, 3 + true); });
});

describe('Numbers and strings: implicit conversion to string', function() {
    it('2 + 3 = 5', function() { assert.equal(5, 2 + 3); });
    it('2 + "3" = 23', function() { assert.equal("23", 2 + "3"); });
    it('1 + 2 + "3" = 33', function() { assert.equal("33", 1 + 2 + "3"); });
    it('1 + "2" + 3 = 123', function() { assert.equal("123", 1 + "2" + 3); });
});

describe('Bitwise operators: implicit conversion to numbers (32bit integer)', function() {
    it('"17" * 3 = 51', function() { assert.equal(51, "17" * 3); });
    it('"16" / 2 = 8', function() { assert.equal(8, "16" / 2); });
    it('"8" | "1" = 1000 & 0001 = 1001 = 9', function() { assert.equal(9, "8" | "1"); });
    it('"8" & "1" = 1000 & 0001 = 0000 = 0', function() { assert.equal(0, "8" & "1"); });
    it('~"8" = ~1000 = -1001 = -9', function() { assert.equal(-9, ~"8"); });
    it('"8" ^ "1" = 1000 ^ 0001 = 1001 = 9', function() { assert.equal(9, "8" ^ "1"); });
    it('"8" >> "1" = 1000 >> 1 = 0100 = 4', function() { assert.equal(4, "8" >> "1"); });
    it('"8" << "1" = 1000 << 1 = 10000 = 16', function() { assert.equal(16, "8" << "1"); });
    it('"8" >>> "1" = 4', function() { assert.equal(4, "8" >>> "1"); });
});

describe('NaN is not equal to itself', function() {
    var x = NaN;
    it('var x = NaN; x === NaN -> false', function() { assert.equal(false, x === NaN); });
});

describe('isNaN can\'t distinguish NaN number from other not nombers values', function() {
    var x = NaN;
    it('isNaN(NaN) -> true', function() { assert.equal(true, isNaN(NaN)); });
    it('isNaN("foo") -> true', function() { assert.equal(true, isNaN("foo")); });
    it('isNaN(undefined) -> true', function() { assert.equal(true, isNaN(undefined)); });
    it('isNaN({}) -> true', function() { assert.equal(true, isNaN({})); });
    it('isNaN({valueOf:"foo"}) -> true', function() { assert.equal(true, isNaN({valueOf:"foo"})); });
});

describe('The more secure way to test a if number is NaN: test if it is not equal to itself', function() {
    var a = NaN;
    var b = "foo";
    it('var a = NaN; a !== a -> true', function() { assert.equal(true, a !== a); });
    it('var b = "foo"; b !== b -> false', function() { assert.equal(false, b !== b); });
});

describe('Objects can be coerced to primitives, e.g. to strings', function() {
    it('"" + Math -> "[object Math]"', function() { assert.equal('[object Math]', '' + Math); });
    it('"" + JSON -> "[object JSON]"', function() { assert.equal('[object JSON]', '' + JSON); });
});

describe('This due to the implicit call to .toString() method', function() {
    it('Math.toString() -> "[object Math]"', function() { assert.equal('[object Math]', Math.toString()); });
    it('JSON.toString() -> "[object JSON]"', function() { assert.equal('[object JSON]', JSON.toString()); });
});

describe('Objects can be coerced to numbers, too, due to valueOf', function() {
    it('2 * {valueOf: function(){return 3;}} = 6', function() { assert.equal(6, 2 * {valueOf: function(){return 3;}}); });
});

describe('When coercing objects, when in doubt, JS calls valueOf over toString', function() {
    var obj = {
        toString: function(){
            return "[object MyObject]"
        },
        valueOf: function(){
            return 17
        }
    }
    it('"object: " + obj = "object: 17"', function() { assert.equal("object: 17", "object: " + obj); });
});

describe('Truthiness: while coercing to boolean, most of all objects are true', function() {
    var obj = new function(){}
    it('obj == true', function() { assert.equal(false, !obj); });
});

describe('Truthiness: these 7 are always false, intsead', function() {
    it('false == false', function() { assert.equal(false, false); });
    it('0 == false', function() { assert.equal(false, 0); });
    it('-0 == false', function() { assert.equal(false, -0); });
    it('"" == false', function() { assert.equal(false, ''); });
    it('NaN == false', function() { assert.equal(true, !NaN); }); //I use the negation to force implicit coercion to boolean
    it('null == false', function() { assert.equal(true, !null); });
    it('undefined == false', function() { assert.equal(true, !undefined); });
});





/* eslint-enable */