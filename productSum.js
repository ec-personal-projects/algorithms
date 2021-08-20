// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  // Write your code here.
  //define an empty result array
  let result = [];
  //define starting depth as 1
  let depth = 1;
  //define a recursive function that takes an array and a depth
  function recurse(array, depth) {
    //iterate through the array. If the current item is an array recurse it with the current depth + 1
    let tempArray = [];
    array.map((item) => {
      if (Array.isArray(item)) {
        recurse(item, depth + 1);
      } else {
        //else the current item is NOT an array, multiply it by current depth and push it to result array
        tempArray.push(item);
      }
    });
    let reduced = tempArray.reduce((a, b) => a + b, 0);
    for (let i = 1; i <= depth; i++) {
      reduced *= i;
    }
    result.push(reduced);
  }

  recurse(array, depth);
  return result.reduce((acc, curr) => acc + curr, 0);
  //reduce the result array and return
}

let test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(test));
