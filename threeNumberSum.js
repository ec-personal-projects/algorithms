function threeNumberSum(array, targetSum) {
  // First, define a results variable and set it to empty array
  let results = [];
  // Sort the array given as an argument:
  array.sort((a, b) => a - b);
  //Iterate through the array
  for (let i = 0; i < array.length; i++) {
    //Iterate through the array a second time
    for (let j = i; j < array.length; j++) {
      //If i and j are not equal:
      if (i !== j) {
        //Define a subArray consisting of array[i], array[j], and the remainder (targetSum - array[i] - array[j])
        let subArray = [array[i], array[j], targetSum - array[i] - array[j]];
        if (array.includes(subArray[2]) === true) {
          //If array includes subArray[2] (the remainder) AND the remainder is larger than both array[i] and array[j], push it to the results
          if (subArray[2] > subArray[0] && subArray[2] > subArray[1]) {
            results.push(subArray);
          }
        }
      }
    }
  }
  // Return results array
  return results;
}
