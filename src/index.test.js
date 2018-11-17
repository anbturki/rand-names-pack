"use strict";

var expect = require("chai").expect;
var names = require(".");
describe("index.js", function () {
  it("should have a list of all avabilable names", function () {
    expect(isArrayOfString(names.all)).to.be.true;
  })
  it("should allow me to get a random name from the list", function () {
    expect(names.random()).to.satisfy(function (item) {
      return names.all.indexOf(item) !== -1;
    })
  })
})

function isArrayOfString(array) {
  return array.every(function(item) {
    return typeof item === "string";
  })
}