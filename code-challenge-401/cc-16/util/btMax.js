'use strict';

let Node = require('./node.js');

class BinaryTree {
  constructor(root = null){
    this.root = root;
  };

  // Big O(n)
  add(value) {
    // type check for integer
    // O(1)
    if (typeof value !== 'number') {
      return null;
    }

    // O(1)
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    // Big O? O(log n) 
    let _add = (node) => {

      // Left is less

      if (value < node.value) {
        // If no left node, create a new node for it, with the current value
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else if (node.left !== null) {
          return _add(node.left);
        }
      }
      // Right is might
      else if (value >= node.value) {
        // If no right node, create a new node for it, with the current value
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else if (node.right !== null) {
          return _add(node.right);
        }
      }
      else {
        return null;
      }
    };
    _add(node);
  };

  findMax(){
    let maxValue = 0;
    let results = [];
      let _walk = (node) => {
        if(node.left) _walk(node.left);
        if(node.value > maxValue) {
          maxValue = node.value;
        }
        results.push(node.value)
        if(node.right) _walk(node.right);
      };
      _walk(this.root);
      console.log('Node Values in Order:', results)
      return maxValue;
  };
}

module.exports = BinaryTree;
