function nonConstructibleChange(coins) {
  // Sort the coins from smallest to largest:
  let sorted = coins.sort((a, b) => a - b);
  // Define a change variable and set to 0;
  let change = 0;
  // Iterate through the array:
  for (let i = 0; i < sorted.length; i++) {
    // If the new coin is GREATER than change + 1, return change + 1
    if (sorted[i] > change + 1) {
      return change + 1;
    } else {
      // Else add the current coin to change (if curr coin <= change)
      change += sorted[i];
    }
  }
  //If the whole iteration passes, return current change + 1;
  return change + 1;
}
