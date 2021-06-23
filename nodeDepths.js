function nodeDepths(root) {
  //Define a sum variable and set equal to 0:
  let sum = 0;
  //Build a recursive function that will traverse the tree. It will take two arguments: a node, and a current depth:
  function traverseTree(n, d) {
    //Add d to the current sum for this node:
    sum += d;
    //If the left child is not null, recurse the function with that node and d+1 as arguments:
    if (n.left !== null) {
      traverseTree(n.left, d + 1);
    }
    //If the right child is not null, recurse the function with that node and d+1 as arguments:
    if (n.right !== null) {
      traverseTree(n.right, d + 1);
    }
  }
  //Invoke the function with the root and a depth of 0;
  traverseTree(root, 0);
  //Return the sum
  return sum;
}

//Even Simpler Solution:
function nodeDepths2(root, d = 0) {
  if (root === null) {
    return 0;
  }
  return depth + nodeDepths2(root.left, d + 1) + nodeDepths2(root.right, d + 1);
}
