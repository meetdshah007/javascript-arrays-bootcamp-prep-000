
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  // arr.splice(0, -1, elem);
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.splice(0, -1, elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  return arr.splice(arr.length, -1, elem);
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.splice(0, 1);
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(0, 1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.splice(arr.length - 1, 1);
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(arr.length - 1, arr.length);
}
