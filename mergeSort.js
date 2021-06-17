const mergeSort = (array) => {
  //First, check if the array CAN be split:
  if (array.length < 2) {
    return array;
  }

  //Get the middle index of that array:
  const middle = Math.floor(array.length / 2);
  //Split the array into two sides:
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  //Use recursion to continue splitting the two arrays that were just split:
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  //Create a new array:
  let result = [];
  //Check if left and right array is empty
  while (left.length && right.length) {
  //Find lower value:
    if (left[0] <= right[0]) {
    //Add left value - the way this works: It will take the first value of the left array out and add it to the result array. Because of the while statement, it will keep going if there is another value in the left array to replace the one that was shifted from the 0 index:
    result.push(left.shift());
    } else {
    //Add right value:
    result.push(right.shift());
    }
  }
  //Merge left array:
  while (left.length) {
    result.push(left.shift());
  }
  //Merge right array:
  while (right.length) {
    result.push(right.shift());
  }
  //return result array:
  return result;
}