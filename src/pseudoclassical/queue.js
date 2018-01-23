const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.head = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
      this.storage[this.head] = value;
      this.head++;
  }
  Queue.prototype.dequeue = function(){
      if(this.start == this.head)
        return null;
      var returnVal = this.storage[this.start];
      this.start++;
      return returnVal;
  }
  Queue.prototype.size = function(){
      return this.head - this.start;
  }

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
