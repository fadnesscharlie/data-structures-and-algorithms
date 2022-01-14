'use strict'

let Hash = require('./hash.js');
let HashTable = new Hash(1024)

function treeIntersection(tree1, tree2) {
  let values = [];
  if(!tree1) return false
  if(!tree2) return false

  let bt1 = tree1.root;
  let bt2 = tree2.root;

  // traverse through first tree
  let _walk = (node) => {
    if(node.left) _walk(node.left)
    if(node.right) _walk(node.right)

    // Hash each value
    let key = HashTable.hash(node.value);

    // Checks to see if the key is already inside of our hashmap
    if(HashTable.contains(key)) {
      // if exsist, push into Values array
      values.push(node.value)
    }
    HashTable.set(key, node.value)
  }
  _walk(bt1);
  _walk(bt2);

  // return values array
  return values
}

module.exports = treeIntersection

// const binaryTree = {
//   root: {
//       value: 1,
//       right: {
//           value: 3,
//           right: {
//               value: 5
//           },
//           left: {
//               value: 4
//           }
//       },
//       left: {
//           value: 2,
//           left: {
//               value: 6
//           }
//       }
//   }
// }

// const binaryTree2 = {
//   root: {
//       value: 1,
//       right: {
//           value: 73,
//           right: {
//               value: 5
//           },
//           left: {
//               value: 54
//           }
//       },
//       left: {
//           value: 61,
//           left: {
//               value: 6
//           }
//       }
//   }
// }

// let result = treeIntersection(binaryTree, binaryTree2)
// console.log('result:', result);
