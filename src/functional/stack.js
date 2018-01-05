const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
