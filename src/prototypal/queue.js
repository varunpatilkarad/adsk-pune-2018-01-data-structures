const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

const queueMethods = {};



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
