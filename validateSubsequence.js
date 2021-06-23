//Input: Two arrays, a complete array and a possible sequence of that array
//Output: A boolean - true if the sequence can be found in the array, false if not:
//Constraints: none
//Edge Case: A single number from the array or the whole array itself are valid sequences

//O(n) time complexity solution:
function isValidSubsequence(array, sequence) {
  // Write your code here.
  //Iterate through the array
  for (let i = 0; i < array.length; i++) {
    //If the current value equals the value at sequence[0], shift that value off of the sequence
    if (array[i] === sequence[0]) {
      sequence.shift();
      //If the sequence is empty, return true
      if (sequence.length === 0) {
        return true;
      }
    }
  }
  //Return false
  return false;
}

let test = [5, 1, 22, 25, 6, -1, 8, 10];
let sequenceTest = [1, 6, -1, 10];

console.log(isValidSubsequence(test, sequenceTest));
