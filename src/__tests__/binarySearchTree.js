const BinarySearchTree = require('../binarySearchTree');

describe.skip('BinarySearchTree', function() {
  let binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  test('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(typeof binarySearchTree.insert === 'function').toBe(true);
    expect(typeof binarySearchTree.contains === 'function').toBe(true);
    expect(typeof binarySearchTree.depthFirstLog === 'function').toBe(true);
  });

  test('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).toBe(3);
    expect(binarySearchTree.right.left.value).toBe(6);
  });

  test('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(8)).toBe(false);
  });

  test('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    const array = [];
    const func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).toEqual([5, 2, 3]);
  });
});
