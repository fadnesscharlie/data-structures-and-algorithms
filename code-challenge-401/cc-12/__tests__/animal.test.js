'use strict';

const Queue = require('../animal/animal-queue.js');
let animalQueue = new Queue();

describe('Queue and Dequeue', () => {
  describe('Queue', () => {
    it('should queue and animal into our queue', () => {
      let queued = animalQueue.enqueue('cat');
      expect(queued).toBe(animalQueue.first.data)
    })
  })

  describe('Dequeue', () => {
    it('should dequeue an animal using FIFO', () => {
      let dequeue = animalQueue.dequeue();
      expect(dequeue).toBeDefined();
    })
  })
})
