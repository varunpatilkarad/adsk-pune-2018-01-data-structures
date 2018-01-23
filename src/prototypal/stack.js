const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj =  Object.create(stackMethods);
  obj.head = 0;
  obj.end = 0;
  obj.storage = { };
  return obj;
};

const stackMethods = {
  push : function(value){
    this.storage[this.end] = value;
    this.end++
  },
  pop : function(){
    if(this.end == this.head)
      return null;

    var returnVal =  this.storage[this.end - 1];
    this.end--;

    return returnVal;
  },
  size : function()
  {
    return this.end;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'stackMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: stackMethods
  });
}
