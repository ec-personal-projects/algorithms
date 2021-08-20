var countNegatives = function (grid) {
  let stack = [...grid];
  let pos = [];
  let neg = [];

  while (stack.length) {
    let next = stack.pop;
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      next.map((val) => {
        if (val < 0) {
          neg.push(val);
        } else {
          pos.push(val);
        }
      });
    }
  }

  return neg.length;
};
