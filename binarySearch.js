function binarySearch(array, target) {
  const binary = function(arr, tar, left, right) {
    if (left > right) {
      return -1;
    }
    //Find the current middle by taking left value and right value and dividing by 2;
    let midpoint = Math.floor((left + right) / 2);
    let midValue = arr[midpoint];
    if (tar === midValue) {
      return midpoint;
    } else if (tar < midValue) {
      return binary(arr, tar, left, midpoint - 1);
    } else if (tar > midValue) {
      return binary(arr, tar, midpoint + 1, right);
    }
  }

  return binary(array, target, 0, array.length - 1);
}
