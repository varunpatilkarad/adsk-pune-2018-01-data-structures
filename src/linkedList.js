const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if(list.head === null && list.tail === null)
      {
        list.head = newNode;
        list.tail = newNode;
      }
      else
      {
        list.tail.next = newNode;
        list.tail = newNode;
      }
  };

  list.removeHead = function() {
    if(list.head !== null){
      var removeNode = list.head;
      var nextNode = removeNode.next;
      list.head = nextNode;

      return removeNode.value;
    }
  };

  list.contains = function(target) {
    var start = list.head;
    
    if(start === null)
      return false;

    do{
      if(!checkIf(target, start))
      {
        start = start.next;
      }
      else
        return true;
    }while(start !== null);
   
    return false;

    function checkIf(target, node){
    if(node.value === target)
      {
        return true;
      }
      return false;
    }
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
