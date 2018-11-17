'use strict';

var names = require("./names");
var uniqueRandomArray = require("unique-random-array");
module.exports = {
  all: names,
  random: uniqueRandomArray(names),
  printName: function (name) {
    if (name === "ali") {
      return "ali";
    }
    return name;
  }
}
