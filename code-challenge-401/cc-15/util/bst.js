'use strict';

const Node = require('./node');
const BT = require('./bt');

/*
Create a Binary Search Tree class
This class should be an extension of the 
Binary Tree Class, with the following additional methods:

***Add***
    Arguments: value
    Return: nothing
    Adds a new node with that value in the correct location in the binary search tree.

****Contains***
    Argument: value
    Returns: boolean indicating whether or not the value is in the tree at least once.
*/

class BinarySearchTree extends BT{

    add(value){
      // console.log('IM STARTING')
      // set node var to root
      let node = new Node(value);
      let root = this.root
      // create recursion method _add
      let _add = (node) => {
        console.log('Am I even Adding?')
        root.value = node.value
        console.log('finsihed adding node', root.value, "===", node.value)
        // return;
      }
      // check if root is null, if yes then make a new node and return
      if(root === null) {
        _add(node);
        console.log(`Added node to root: ${node}`)
        return root;
        // check value < left 
      } 
      // _check();
      let _check = () => {
        // if the node is higher then root
        if (root.value <= node.value) { // root less then node
          // console.log('Root Value', root.value, 'Node Value',node.value)
          // console.log('Root ways', root.right.value, root.left.value)

        
          // if not root.right make one
          if(!root.right) {
            console.log(`added node to the right: root: ${root.value}, value: ${node.value}`)
            _add(node);
            return;  
          } 
          else if (root.right.value < node.value) { // root.right less then node
          // if right is less then value
            root = root.right;
            console.log('Go right, from Right')
            _check();   
          } 
          else if (root.left.value < node.value) { // root.right less then node
            root = root.left;
            console.log('Go left, from Right')
            _check();
          }
        } 

        // if node is less then root
        if (root.value >= node.value) { // root greater then node
          console.log('Root Greater', root.value, node.value)

          // if not root.left make one
          if(root.left === null) {
            console.log(`added node to the left: root: ${root.value}, value: ${node.value}`)
            _add(node);
            return;  
          }
          // if right is less then value
          else if(root.right.value < node.value) { // root.right less then node
            root = root.right;
            console.log('Go right, from Left')
            _check();   
          } 
          else if (root.left.value < node.value) { // root.right less then node
            root = root.left;
            console.log('Go left, from Left')
            _check();
          }
        }
      }
      console.log('Outside!!!')
      _check();
      // if (root.left < node.value) {
      //   root = root.left;
      //   _check();  
      // }
      // if(!node.left) {
      //   _add(node);
      // }
      
      // if(root.left === null) {
      //   _add(node);
      //   return root;
      // }
            // if no node then create node
            // otherwise, if node.left is not null, recursively call _add(node.left)
        // check value >= right 
            // if no node then create
            // otherwise, if node.left is not null, recursively call _add(node.right)
        // otherwise return null
        // FINALLY! kick it all off by calling the function _add() w/ node -> _add(node)
    };

    contain(value){

      //iterative
        // set current variable to root
        // this is a bST so we can compare current, left, and right to the value 
        // and return if equal
        // loop until current is null
        // return false if no value
      //recursive
        //grab root
        //create _contains recursive fn
        //compare values and call _contains depending on <, >, =
        //call _contains(root)
    }
};

module.exports = BinarySearchTree;
