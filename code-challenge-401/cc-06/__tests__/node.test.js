'use strict';

const Node = require('../lib/node.js');

describe('Node Test', () => {
  it('constructor()', () => {
    let value = 'Zork';
    let node = new Node(value)
    expect(node.data).toEqual(value)
    expect(node.next).toBeNull();
  })
})
