'use strict';

const Node = require('../util/node');
const BT = require('../util/bt');
const BST = require('../util/bst');

// create Nodes 1 - 9 and left/right relationships

//          1 -> Root
//         / \
//        2   3
//       /   / \
//      6   4   5
//       \
//        7
//       / \
//      8   9

// we want this to happen before each test
let secondOne = new Node(1);
let one = new Node(1);
let two = new Node(2); 
let two2 = new Node(2);
let three = new Node(3); 
let three2 = new Node(3);
let four = new Node(4); 
let four2 = new Node(4);
let five = new Node(5); 
let five2 = new Node(5);
let six = new Node(6); 
let six2 = new Node(6);
let seven= new Node(7); 
let seven2 = new Node(7);
let eight= new Node(8);
let eight2 = new Node(8);
let nine= new Node(9);
let nine2 = new Node(9);
let ten= new Node(10);
let ten2 = new Node(10);
let eleven = new Node(11);
let twelve= new Node(12);
let twelve2 = new Node(12);
let thirteen = new Node(13);
let fourteen = new Node(14);
let fifteen = new Node(15);
let sixteen= new Node(16);
let sixteen2 = new Node(16);
let seventeen = new Node(17);

//left
one.left = two;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
// right
one.right = three;
three.left = four;
three.right = five;

let preRes = [1,2,6,7,8,9,3,4,5];
let inRes = [6,8,7, 9, 2, 1, 4, 3,5 ];
let postRes = [8, 9, 7, 6, 2, 4, 5, 3, 1 ];

// Create BT with root Node(1)
let tree = new BT(one);



//left
secondOne.left = two2;
two2.left = four2;
four2.right = six2;
six2.left = seven2;
six2.right = nine2;

// right
secondOne.right = ten2;
ten2.left = twelve2;
ten2.right = sixteen2;

let searchTree = new BST(secondOne);

describe('Binary Tree Traversal', () => {

    it('preOrder properly traverses and returns result', () => {
        let preOrder = tree.preOrder();
        // console.log(preOrder);
        expect(preOrder).toEqual(preRes);
    });

    it('inOrder properly traverses and returns result', () => {
        let inOrder = tree.inOrder();
        // console.log(inOrder);
        expect(inOrder).toEqual(inRes);
    });

    it('postOrder properly traverses and returns result', () => {
        let postOrder = tree.postOrder();
        // console.log(postOrder);
        expect(postOrder).toEqual(postRes);
    });
});

describe('Binary Search Tree', () => {
    it('Adds a node in the furthest right position', () => {
        searchTree.add(17);
        let correct = searchTree.root.right.right.value
        // console.log('From Testing', correct);
        expect(correct).toEqual(17)
    })

    it('Adds a node in the furthest left position', () => {
        searchTree.add(3);
        let correct = searchTree.root.left.value
        // console.log('correct', correct)
        expect(correct).toEqual(3)

    })

    it('should contain the value', () => {
        let contained = searchTree.contain(3)
        console.log('test contained',contained)
        expect(contained).toBeTruthy();  
    })

    it('should not contain the value', () => {
        let contained = searchTree.contain(90)
        console.log('test contained',contained)
        expect(contained).toBeFalsy();  
    })
})

/*
Test preorder
    let preOrder = tree.preOrder
    expect preOrder to equal preRes!

Test inOrder
    let inOrder = tree.inOrder
    expect inOrder to equal preRes!

Test postOrder
    let postOrder = tree.postOrder
    expect postOrder to equal postRes!
*/
