function classPhotos(redShirtHeights, blueShirtHeights) {
  let sortedRed = redShirtHeights.sort((a, b) => a - b);
  let sortedBlue = blueShirtHeights.sort((a, b) => a - b);

  // console.log(sortedRed)
  let checker = false;
  if (sortedRed[0] > sortedBlue[0]) {
    checker = true;
    for (let i = 1; i < sortedRed.length; i++) {
      if (sortedBlue[i] > sortedRed[i]) {
        checker = false;
      }
    }
    return checker;
  } else if (sortedBlue[0] > sortedRed[0]) {
    checker = true;
    for (let i = 1; i < sortedBlue.length; i++) {
      if (sortedRed[i] > sortedBlue[i]) {
        checker = false;
      }
    }
  }
  return checker;
}

classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
