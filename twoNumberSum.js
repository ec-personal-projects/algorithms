//O(n^2) Time Complexity Solution:
function twoNumberSum(array, targetSum) {
  //Loop through the array:
  for (let i = 0; i < array.length; i++) {
    //Loop through the array again starting at the next value:
    for (let j = i + 1; j < array.length; j++) {
      //If the number at index i and the number at index j equal the targetSum value, return them in an array
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

//O(n) Time Complexity Solution:
function betterSolution(array, targetSum) {
  //Loop through the array:
  for (let i = 0; i < array.length; i++) {
    //Define the firstVal, which is the current number at index i
    let firstVal = array[i];
    //Define the secondVal which is what number is needed to equal the targetSum
    let secondVal = targetSum - array[i];
    //If the secondVal can be found in the array AND it's not the same value as the firstVal, return the two in an array
    if (array.includes(secondVal) === true && secondVal !== firstVal) {
      return [firstVal, secondVal];
    }
  }
  return [];
}

console.log(betterSolution([3, 5, -4, 8, 11, 1, -1, 6], 10));
