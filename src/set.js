const Set = function() {
  const set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Set;
}
