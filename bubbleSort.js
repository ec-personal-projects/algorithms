function bubbleSort(array) {
  //Define a sorted variable
  let sorted = false;
  //Iterate through the array
  for (let i = 0; i < array.length; i++) {
    //If the curr val is larger than the next val, set sorted to true, and swap
    if (array[i] > array[i + 1]) {
      sorted = true;
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
      //Else if at the end of the iteration and sorted is false, return the array
    } else if (i === array.length - 1 && sorted === false) {
      return array;
      //Else if at the end of the iteration and sorted is true, run the function again with the last pass of the array;
    } else if (i === array.length - 1 && sorted === true) {
      return bubbleSort(array);
    }
  }
}

console.log(bubbleSort([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
