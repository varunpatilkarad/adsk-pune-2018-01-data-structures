const Graph = require('../graph');

describe('Graph', function() {
  let graph;

  beforeEach(function() {
    graph = new Graph();
  });

  test('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(typeof graph.addNode === 'function').toBe(true);
    expect(typeof graph.contains === 'function').toBe(true);
    expect(typeof graph.removeNode === 'function').toBe(true);
    expect(typeof graph.hasEdge === 'function').toBe(true);
    expect(typeof graph.addEdge === 'function').toBe(true);
    expect(typeof graph.removeEdge === 'function').toBe(true);
    expect(typeof graph.forEachNode === 'function').toBe(true);
  });

  test('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).toBe(true);
  });

  test('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).toBe(true);
    graph.removeNode(2);
    expect(graph.contains(2)).toBe(false);
  });

  test('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).toBe(true);
    expect(graph.hasEdge(3, 1)).toBe(false);
  });

  test('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toBe(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toBe(false);
  });

  test('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toBe(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).toBe(false);
  });

  test('should execute a callback on each node in the graph', function() {
    const connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).toBe(true);
    expect(graph.hasEdge(1, 5)).toBe(true);
    expect(graph.hasEdge(3, 5)).toBe(true);
    expect(graph.hasEdge(5, 5)).toBe(true);
  });
});
