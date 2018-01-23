const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {

  if(this.children === null)
  {
    this.children = [];
  }
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return CheckInTree(target, this);

  function CheckInTree(target, tr)
  {
    if(CheckValue(target, tr))
      return true;

    if(tr.children !== null){
      for(let i = 0; i < tr.children.length; i++)
      {
        if(CheckInTree(target, tr.children[i]))
          return true;
      }
    }
    
      return false;
  }

  function CheckValue(target, tr){
    return tr.value === target;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
