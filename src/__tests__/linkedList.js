const LinkedList = require('../linkedList');

describe('LinkedList', function() {
  let linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  test('should have a head and tail', function() {
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');
  });

  test('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(typeof linkedList.addToTail === 'function').toBe(true);
    expect(typeof linkedList.removeHead === 'function').toBe(true);
    expect(typeof linkedList.contains === 'function').toBe(true);
  });

  test('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).toBe(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toBe(5);
  });

  test('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).toBe(4);
    linkedList.removeHead();
    expect(linkedList.head.value).toBe(5);
  });

  test('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).toBe(4);
  });

  test('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).toBe(true);
    expect(linkedList.contains(5)).toBe(true);
    expect(linkedList.contains(6)).toBe(false);
  });

  test('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).toBe(false);
  });

  // add more tests here to test the functionality of linkedList
});
