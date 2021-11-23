function selectionSort(array) {
  //Define result array
  let result = [];
  //While array length is greater than  or equal to 1
  while (array.length >= 1) {
    //Define minimumIdx = 0;
    let minIdx = 0;

    //Loop through the array
    for (let i = 0; i < array.length; i++) {
      //If current value is less than array[minimumIdx], replace minimumIdx
      if (array[i] < array[minIdx]) {
        minIdx = i;
      }
      //If current idx is equal to array.length - 1, splice current minimum out and push to result
      if (i === array.length - 1) {
        result.push(array[minIdx]);
        array.splice(minIdx, 1);
      }
    }
  }
  //Return result array
  return result;
}

let testArray = [8, 5, 2, 9, 5, 6, 3];

console.log(selectionSort(testArray));