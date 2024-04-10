const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront){
    arr.unshift(value)
  }else{
    arr.push(value)
  }
};

const reverseString = (string) => {
  let newStringList = string.split("")
  newStringList = newStringList.reverse()
  return newStringList.join("")
};

// console.log(reverseString("hello"))

const newArrayFullOf = (value, numOfValue) => {
  // let arr = []
  // for (let i=1; i<= numOfValue; i++){
  //   arr.push(value)
  // }
  // return arr
  const arr = new Array(numOfValue).fill(value);
  return arr;
};

// const arr = newArrayFullOf(1, 5) // [1, 1, 1, 1, 1]
// console.log(arr)
// const arr2 = newArrayFullOf(true, 2) // [true, true]
// console.log(arr2)

// const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
// fruits.splice(2, 3, 'grape', 'pear');
// console.log(fruits); // [ 'apple', 'banana', 'grape', 'pear' ]

const insertIntoMiddle = (arr, value) => {
  let midpoint = 0
  // if (arr.length %2 === 1){
  //   midpoint = arr.length / 2 + 1
  // } else{
  midpoint = arr.length / 2
  // }
  // console.log(arr) // [1, 2, 3, 4, 5]
  arr.splice(midpoint, 0, value)
  // console.log(arr)

};

// insertIntoMiddle([1, 2, 3, 4, 5], 6)

const deleteFromMiddle = (arr) => {
  let midpoint = arr.length / 2
  arr.splice(midpoint, 1)
};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value

};

// console.log(isRightIndex([1, 2, 3], 4, 4)) //false

const roundAllNumsDown = (arr) => {
  let newArr = arr.map(num => Math.floor(num))
  return newArr
};

// console.log(roundAllNumsDown([1.1, 2.2, 3]))


const getAllYCoordinates = (arrOfCoords) => {
  let newArr = arrOfCoords.map(value => value[1])
  return newArr
  
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
