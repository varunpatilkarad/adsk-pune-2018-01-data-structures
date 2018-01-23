

// Instantiate a new graph
const Graph = function() {
  var Nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Node(node);
  this.Nodes.push(newNodes);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(let i = 0; i < this.Nodes.length; i++)
    {
      if(Nodes[i].Value === node)
        return true;
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  let nodeToRemove = findNode(node);
  
  if(nodeToRemove === null)
    return;

  let edges = nodeToRemove.Edges;
  for(let i = 0; i < edges.lengh; i++)
  {
    let ed = edges[i];
    this.removeEdge(ed.StartNode, ed.EndNode);
  }



    function findNode(node){
      for(let i = 0; i < this.Nodes.lengh; i++)
      {
        if(node === this.Nodes[i].Value)
          return this.Nodes[i];
      }
      return null;
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  

  function findEdge(edge, node){
    for(let i = 0; i < node.Edges.Legth; i++)
    {
      if(edge === node.Edges[i])
        return node.Edges[i];
    }
    return null;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

class Edge{
  constructor(start, end){
    this.StartNode = start;
    this.EndNode =end;
  }
}

class Node{
  constructor(value){
    this.Value = value;
    this.Edges = [];
  }
  addEdge(edge){
    this.Edges.push(edge);
  }
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Graph;
}
