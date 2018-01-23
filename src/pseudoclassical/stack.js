const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.end = 0;
  this.storage = { };
};

Stack.prototype.push = function(value){
  this.storage[this.end] = value;
  this.end++
}
Stack.prototype.pop = function(){
  if(this.end == this.head)
    return null;

  var returnVal =  this.storage[this.end - 1];
  this.end--;

  return returnVal;
}
Stack.prototype.size = function()
{
  return this.end;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
