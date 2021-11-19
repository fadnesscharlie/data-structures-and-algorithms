# Find Max Value in a Binary Tree

## Challenge

Our challenge today is to find the max value in a binary tree. We must traverse the whole tree, compare each value, and if the value is higher then any other node, we must return that value when we are done.

We can not use the binary search tree method here. Because depending on how the tree is, there can be a higher value stashed away where it shouldn't be. So it is best if we search the whole tree, just in case.

## Max Value

The max value represents finding a certain condition. Once that condition has been met or no other conditions satisfy it, we return it.

## Testing

For testing purposes. Pull down the repo, `npm i` to install all the dependencies you need.

Run `npm run test max.test.js` to run our tests.
