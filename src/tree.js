/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */


class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node
  addChild(value) {
    // const newNode = new Tree(value);
    // this.children.push(newNode);
    this.children.push(new Tree(value));
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) { // BFS or DFS??
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i].contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;

// run test trees down here!!
// const myTree = new Tree(2);
// myTree.addChild(7);
// myTree.addChild(5); //
// myTree[0].addChild(2);
/*
    2
  7   5
2

*/
