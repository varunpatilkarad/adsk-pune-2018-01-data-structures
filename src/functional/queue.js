const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var head = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head] = value;
    head++;
  };

  someInstance.dequeue = function() {
    if(start == head)
      return null;

    var returnVal = storage[start];
    start++;
    return returnVal;
  };

  someInstance.size = function() {
    return head - start;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}

