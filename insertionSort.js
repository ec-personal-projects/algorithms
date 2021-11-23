function insertionSort(array) {
  //Iterate through the array
  array.map((num, idx) => {
    //Define n as the current index
    let n = idx;
    //For each item, while it is less than the number behind it:
    while (array[n] < array[n - 1]) {
    //Perform Swap:
      let temp = array[n - 1];
      //Let temp = array[n - 1];
      array[n - 1] = array[n];
      //Array[n - 1] = array[n];
      array[n] = temp;
      //Array[n] = temp;
      n -= 1;
      //n decreases by one
    }
  })
  //Return array
  return array;
}

let testArray = [8, 5, 2, 9, 5, 6, 3];

console.log(insertionSort(testArray));