const add = (x,y) => x+y
const subtract = (x,y) => x-y
const multiplybyThree = (x) => x*3

 module.exports.addition=add
 exports.subtract = subtract
 exports.multiplybyThree=multiplybyThree


/**
  You can do following as well
    module.exports  = {
      add,
      subtract,
      multiplybyThree
    }
    but doing following will cause an error since require will only use the value from module.exports
    So by assigning exports to a new value, we're effectively pointing the value of exports to another reference away from the initial reference to the same object as module.exports.

    exports = {
      add,
      subtract,
      multiplybyThree
    }
 */


