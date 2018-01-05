const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

const stackMethods = {};



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
