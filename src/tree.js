const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
