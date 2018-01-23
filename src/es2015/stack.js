
class Stack{

  constructor(){
    this.head = 0;
    this.end = 0;
    this.storage = { };
  }

  push(value){
    this.storage[this.end] = value;
    this.end++
  }
  pop(){
    if(this.end == this.head)
      return null;

    var returnVal =  this.storage[this.end - 1];
    this.end--;

    return returnVal;
  }
  size()
  {
    return this.end;
  }

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
