/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

class BinarySearchTree {
  constructor(value) { // Root only special in terms of references (each node is a tree itself)
    this.value = value; // actual node value
    this.left = null; // link to left node
    this.right = null; // link to right node
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) { // delegate behaviors to the child trees
    // const nextTree = new BinarySearchTree(value);
    // console.log(this); // this === parent
    // console.log(nextTree); // nexxtTree === child
    // console.log(value); // the value we want to insert into the tree (make a new node with)

    if (value < this.value) {
      // is there a left
      if (this.left) { // the left node exists
        this.left.insert(value); // insert the value as the child of the this.left
      } else {
        this.left = new BinarySearchTree(value);
      }
      // this.left.insert(value);
    } else if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
  }


  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    console.log(target);
    console.log(this);
    console.log(this.value);
    const find = (t) => {
      // compare target to this.value
      // if target is === this.value return TRUE (base case)
      // if target is < this.value
        // if this.value.left
          // recurse with this.value.left
        // else return false;
      //
      // REFACTOR WITH SOME TERNARYS
      if (this.value === t) return true; // base case

      if (t < this.value) { // smaller than top of tree GO LEFT
        if (this.left) {
          return this.left.contains(t); // works back up the chain or tree
        }
        return false;
      }   // bigger than top of tree GO RIGHT
      if (this.right) {
        return this.right.contains(t);
      }
      return false;
    };
    return find(target);
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {

  }
}

module.exports = BinarySearchTree;
// const myTree = new BinarySearchTree(6)
// myTree.insert(5)
// myTree.children[0]
