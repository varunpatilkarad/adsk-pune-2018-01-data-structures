
class Queue{
  constructor(){
    this.head = 0;
    this.start = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.head] = value;
    this.head++;
  }
  dequeue() {
    if(this.start == this.head)
      return null;

    var returnVal = this.storage[this.start];
    this.start++;
    return returnVal;
  }
  size() {
    return this.head - this.start;
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
