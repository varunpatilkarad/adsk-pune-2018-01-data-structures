const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var head = 0;
  var end = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[end] = value;
    end++
  };

  someInstance.pop = function() {
    if(end == head)
      return null;
    var returnVal =  storage[end - 1];
    end--;
    return returnVal;
  };

  someInstance.size = function() {
    return end;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
