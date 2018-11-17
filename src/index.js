var names = require("./names");
var uniqueRandomArray = require("unique-random-array");
module.exports = {
  all: names,
  random: uniqueRandomArray(names)
}
