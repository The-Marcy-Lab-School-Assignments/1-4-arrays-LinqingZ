/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length =0;
  // return arr // not sure if you need to return
};

// Object.defineProperty(Array.prototype, 'first', {
//   value() {
//     return this.find(e => true)     // or this.find(Boolean)
//   }
// })

const getFirstItem = (array) => {
  // return array.shift(); // changed the original array
  // return array.first(); // needs to define the funtion first
  // console.log(array.slice(0, 1))
  // return array.slice(0, 1)[0];
  return array[0];
  
};

// getFirstItem([1, 2, 3])

module.exports = {
  clearArr,
  getFirstItem,
};
