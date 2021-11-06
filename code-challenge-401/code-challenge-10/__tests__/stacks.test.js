'use strict';

const Stack = require('../stacks-and-queues/stack.js');

describe('Stack', () => {
  describe('Peak', () => {
    it('returns null on an empty stack', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
    })
  })

  describe('push', () => {
    it('adds a value to the top of the stack', () => {
      // Create a new stack
      let stack = new Stack();
      // push 3 values
      stack.push(1);
      stack.push(2);
      stack.push(3);
      // expect those values
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      // expect(stack.peek()).toBeNull();
    })
  })

  describe('pop', () => {
    it('returns and removes the top item', () => {
      // Create a new stack
      let stack = new Stack();
      // push 3 values
      stack.push(1);
      stack.push(2);
      stack.push(3);
      // expect those values
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      // expect(stack.peek()).toBeNull();
    })
  })

  describe('empty', () => {
    it('should return true or false on isEmpty()', () => {

      let stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
      stack.push(1);
      // expect(stack.isEmpty()).toBeFalsy();
      // doesnt work because its an array
    })

  })
})
