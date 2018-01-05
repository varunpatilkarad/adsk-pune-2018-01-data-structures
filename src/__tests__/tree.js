const Tree = require('../tree');

describe('Tree', function() {
  let tree;

  beforeEach(function() {
    tree = Tree();
  });

  test('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(typeof tree.addChild === 'function').toBe(true);
    expect(typeof tree.contains === 'function').toBe(true);
    expect(tree.hasOwnProperty('value')).toBe(true);
  });

  test('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).toBe(5);
  });

  test('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  test('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).toBe(false);
  });

  test('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toBe(6);
  });

  test('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(8)).toBe(true);
  });
});
