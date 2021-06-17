//I: Takes two arguments: A binary search tree (a whole tree. It's stored as an object) and a target integer value
//O: Returns the value that is CLOSEST to the target value provided
//C:
//E:

function findClosestValueInBst(tree, target) {
  //Just iterate through the nodes and find the value that is closest to the target value:

  //Create a currMin distance variable - Make sure to use absolute values:
  let currMin = Math.abs(target - tree.value);
  //Create a currNode value which is the node value associated with the currMin value above:
  let currNode = tree.value;

  //Will need to traverse entire tree:
  function recurseTree(node) {
    //Set a variable containing the current distance of the node from the target - Make sure to use absolute values:
    let nodeDistance = Math.abs(target - node.value);
    //If the distance is smaller than the currMin value, replace currMin and currNode;
    if (nodeDistance < currMin) {
      currMin = nodeDistance;
      currNode = node.value;
    }
    //If there is a left node, recurse it:
    if (node.left !== null) {
      recurseTree(node.left);
    }
    //If there is a right node, recurse it:
    if (node.right !== null) {
      recurseTree(node.right);
    }
  }
  //Invoke the recursive function on the tree provided:
  recurseTree(tree);
  //Return currNode
  return currNode;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
