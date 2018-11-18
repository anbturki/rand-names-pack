import uniqueRandomArray from 'unique-random-array';
const names = require('./names');

const randomNamesPack = {
  all: names,
  random: uniqueRandomArray(names),
};

export default randomNamesPack;
module.exports = randomNamesPack;
