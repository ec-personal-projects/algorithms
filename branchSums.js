// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//I: A binary tree object
//O: An array of sums for each branch
//C:
//E:

function branchSums(root) {
  //Define a results variable which will return an array of values:
  let results = [];
  //Define a recursive function which will go down each branch of the tree, adding each node to a temporary array:
  function recurseTree(node, val) {
    //Add the current node value to the value that was passed as an argument:
    val = val + node.value;
    //If both the left and right children are empty, you know you're at the end of a branch. Push that value to the results:
    if (node.left === null && node.right === null) {
      results.push(val);
    } else {
      //else, if the left node is not null, recurse the function with the current value and that left node:
      if (node.left !== null) {
        recurseTree(node.left, val);
      }
      //if the right node is not null, recurse the function with the current value and that right node:
      if (node.right !== null) {
        recurseTree(node.right, val);
      }
    }
  }

  //Invoke the recursive function with an empty array and the root node
  recurseTree(root, 0);
  //Return results
  return results;
}
