const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj =  Object.create(queueMethods)
  obj.start = 0;
  obj.head = 0;
  obj.storage = { };
  return obj;
};

const queueMethods = {
  enqueue : function(value){
    this.storage[this.head] = value;
    this.head++;
  },
  dequeue : function(){
    if(this.start == this.head)
    return null;

  var returnVal = this.storage[this.start];
  this.start++;
  return returnVal;
  },
  size : function()
  {
    return this.head - this.start;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
