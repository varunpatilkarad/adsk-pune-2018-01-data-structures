module.exports = function runStackTests (Stack, useNew) {
  let stack;

  beforeEach(function() {
    if (useNew) {
      stack = new Stack();
    } else {
      stack = Stack();
    }
  });

  test('reports a size of zero for a new stack', function() {
    expect(stack.size()).toBe(0);
  });

  test('reports a size of 2 after adding two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).toBe(2);
  });

  test('does not error when removing from an empty stack', function() {
    expect(function() { stack.pop(); }).not.toThrow();
  });

  test('reports a size of 1 after adding two items and removing one', function() {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).toBe(1);
  });

  test('reports a size of 0 after removing more items than were added', function() {
    stack.push('a');
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  test('allows sequentially additing and removing items', function() {
    stack.push('a');
    expect(stack.pop()).toBe('a');
    stack.push('b');
    expect(stack.pop()).toBe('b');
  });

  test('removes the most recently added of two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).toBe('b');
  });

  test('removes the newest item, after newer items have already been added and removed', function() {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).toBe('b');
  });
};
