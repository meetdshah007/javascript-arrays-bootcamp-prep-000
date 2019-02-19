
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  // arr.splice(0, -1, elem);
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  return arr.splice(0, -1, elem);
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
  return arr.slice(0, 1)
}

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })