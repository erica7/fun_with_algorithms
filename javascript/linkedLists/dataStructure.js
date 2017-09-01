// Create data structure for a singly linked list and a node.
// SinglyLinkedList class contains methods to create new SLLs and Nodes.

// Singly Linked List data stucture
function SinglyLinkedList (val = null) {
  if (val) {
    this.head = new this.ListNode (val);
  } else {
    this.head = null;
  }
}

// Node for Singly Linked List data structure
SinglyLinkedList.prototype.ListNode = function(val = null) {
// function ListNode (val = null) {
  this.val = val;
  this.next = null;
}

// delete node from a list
SinglyLinkedList.prototype.deleteNode = function(sll, d){
  var runner = sll.head;
  if(runner.val === d) {
    this.head = runner.next;
  }
  while(runner){
    if(runner.next.val === d){
      runner.next = runner.next.next;
    }
  }
}

// add node to end of list
SinglyLinkedList.prototype.addNode = function(sll, val){
  var newNode = new this.ListNode(val);
  if (!this.head) {
    this.head = newNode;
  } else {
    var runner = this.head;
    while (runner.next) {
      runner = runner.next;
    }
    runner.next = newNode;
  }
}

// generate list with given array of node values
SinglyLinkedList.prototype.generateList = function(arr){
  var sll = new SinglyLinkedList(arr[0]);
  var len = arr.length;
  for (let i=1; i<len; i++) {
    sll.addNode(sll, arr[i]);
  }
  return sll;
}

SinglyLinkedList.prototype.printAll = function(){
  var runner = this.head;
  while (runner) {
    console.log(runner.val);
    runner = runner.next;
  }
}

module.exports = SinglyLinkedList;

// var testCase = [3,5,7,9]
// var sll = new SinglyLinkedList();
// console.log(sll.generateList(testCase));
