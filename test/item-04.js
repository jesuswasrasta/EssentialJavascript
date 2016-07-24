"use strict";

var assert = require('chai').assert;

/* +eslint-disable */

//Item 4 - Prefere Primitives to Object Wrappers 
describe('A string is a string, a String() is an object', function() {
    let myPrimitiveString = "a word";
    let myObjectString = new String("a word");
    it('myPrimitiveString = "a word"; typeof(myPrimitiveString) -> string', function() { assert.equal("string", typeof(myPrimitiveString)); });
    it('myObjectString =  new String("a word"); typeof(myObjectString) -> object', function() { assert.equal("object", typeof(myObjectString)); });
});

describe('You can\'t compare two String() objects with built-in operators', function() {
    it('new String("hello") === new String("hello") ? false', function() { assert.equal(false, new String("hello") === new String("hello")); });
    it('new String("hello") == new String("hello") ? false', function() { assert.equal(false, new String("hello") == new String("hello")); });
});

//This example of Essential Javascript book doesn't work here
// describe('If you add new properties on primitives, you get a new object wrapper', function() {
//     "hello".someProperty = 17; //you can't do this...
//     it('"hello".someProperty = 17; "hello".someProperty -> undefined', function() { assert.equal("undefined", "hello".someProperty); });    
// });



/* +eslint-enable */