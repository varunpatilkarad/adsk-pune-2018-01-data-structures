module.exports = function runQueueTests (Queue, useNew) {
  let queue;

  beforeEach(function() {
    if (useNew) {
      queue = new Queue();
    } else {
      queue = Queue();
    }
  });

  test('reports a size of zero for a new queue', function() {
    expect(queue.size()).toBe(0);
  });

  test('reports a size of 2 after adding two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).toBe(2);
  });

  test('does not error when removing from an empty queue', function() {
    expect(function() { queue.dequeue(); }).not.toThrow();
  });

  test('reports a size of 1 after adding two items and removing one', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  test('reports a size of 0 after removing more items than were added', function() {
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toBe(0);
  });

  test('allows sequentially adding and removing items', function() {
    queue.enqueue('a');
    expect(queue.dequeue()).toBe('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toBe('b');
  });

  test('removes the least recently added of two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toBe('a');
  });

  test('removes the oldest item, after newer items have already been added and removed', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).toBe('b');
  });
};
