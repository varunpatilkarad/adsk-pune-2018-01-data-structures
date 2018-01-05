

const hashTableHelpers = require('./hashTableHelpers');
const LimitedArray = hashTableHelpers.LimitedArray;
const getIndexBelowMaxForKey = hashTableHelpers.getIndexBelowMaxForKey;

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};





if (typeof module !== 'undefined' && module.exports) {
  module.exports = HashTable;
}
