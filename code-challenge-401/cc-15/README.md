# Binary and Binary Search Trees

## Binary Tree

Here we will implement a binary tree and traverse through the tree in three different orders. PreOrder, InOrder, and PostOrder.

PreOrder is when you place the first value before moving on to the left then right, then repeat.

InOrder is when you place the value after going all the way left, then place the value in the array, then move right, and repeat

PostOrder is when you go through left, then right, then place the value in the array, and repeat.

## Binary Search Tree

Binary Search Trees are very simular to Binary Trees, the main difference is that the nodes are postioned in a way that we can find our data easier. The easiest way to look at this is when you have your first node, if it is higher then the current node, it goes right, if its less, then it goes left, and if its the same, then it can be left or right.

We have two main functions, the functions are add and contains.

Add makes it so you can add a node into the Binary Search Tree by traversing through the tree and placing it where it belongs depending on the current nodes in the tree

Contains goes through the array to see if it contains the value you are looking for, and if it does, then you want to return a true or false.

## Usage

Pull down the repo, run `npm i` in the root folder

## Testing

To run tests, while in the root folder, run `npm run test bt.test.js` and it will run our tests for us.
