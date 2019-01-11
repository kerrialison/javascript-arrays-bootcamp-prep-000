//: In arrays.js, define two functions, addElementToBeginningOfArray and destructivelyAddElementToBeginningOfArray.
//Both functions take two parameters, an array and an element to add to the beginning of the array, and both
//functions should add the element to the beginning of the array and then return the whole array. The destructive function,
//destructivelyAddElementToBeginningOfArray, should alter the original array that's passed in; addElementToBeginningOfArray,
//on the other hand, should return a new array and not modify the original.

//: Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray.
//These functions also take two arguments, an array and an element to add to the end of the array. addElementToEndOfArray should not
//alter the original array; destructivelyAddElementToEndOfArray should alter the original array.

var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
//destructivelyAddElementToBeginningOfArray(chocolateBars, "hershey")

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
//destructivelyAddElementToEndOfArray(chocolateBars, "milkyway")

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
//destructivelyRemoveElementFromEndOfArray(chocolateBars)

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
//destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

//non-destructively add and remove elements //
function removeElementFromBeginningOfArray(array) {
  var newArray
  return newArray
}

function addElementToBeginningOfArray(array, element) {
  var newArray =
  return newArray
}

function addElementToEndOfArray(array, element) {
  var newArray =
  return newArray
}

function removeElementFromEndOfArray(array){

  return array;
}
removeElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array) {
  var newArray =
  return newArray
}

//access elements //
function accessElementInArray(array, index) {
  return
}
