const uppercaseAll = (...theArgs) => {
  // return [
  //   word1.toUpperCase(),
  //   word2.toUpperCase(),
  //   word3.toUpperCase(),
  // ];
  let arr = theArgs.map(word => word.toUpperCase())
  return arr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
