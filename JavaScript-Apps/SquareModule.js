/*
To export a function (such as a constructor) or to export a complete object in one assignment instead of building it one property at a time, assign it to module.exports instead of exports.
 */

// assigning to exports will not modify module, must use module.exports
//The module exports a constructor:

module.exports = (width) => {
  return {
    area: () => width * width
  };
}
