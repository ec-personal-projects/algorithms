//WITHOUT SORTING

function findThreeLargestNumbers(array) {
  //Define placeholder vars;
  let high;
  let med;
  let low;
  //Iterate through the array
  array.map((val) => {
    //If the current value is larger than high, or high doesn't exist
    if (val > high || !high) {
      //Swap low for medium, medium for high, and high to new value:
      low = med;
      med = high;
      high = val;
    }
    //Else if current value is larger than med, or med doesn't exist
    else if (val > med || !med) {
      //Swap low for med, and replace mid with curr val
      low = med;
      med = val;
      //Else if curr val is larger than low, or low doesn't exist
    } else if (val > low || !low) {
      //Replace low with curr val
      low = val;
    }
  });
  //return result array
  return [low, med, high];
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
