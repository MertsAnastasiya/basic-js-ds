const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class List {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    let node = new ListNode(value);
    if(this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
       currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  remove(k) {
    let currentNode = this.head;
    let previousNode;
    while(currentNode !== null) {
      if(this.head.value === k) {
         this.head = currentNode.next;
         this.length--;
         currentNode = this.head;
       } else {
           if(currentNode.value === k) {
             previousNode.next = currentNode.next;
             currentNode = currentNode.next;
             this.length--;
           } else {
             previousNode = currentNode;
             currentNode = currentNode.next;
           }
         }
     }

  }

}

// function remove(head, k) {
//   let currentNode = head;
//   let previousNode;
//   while(currentNode !== null) {
//     if(head.value === k) {
//        head = currentNode.next;
//        currentNode = head;
//      } else {
//          if(currentNode.value === k) {
//            previousNode.next = currentNode.next;
//            currentNode = currentNode.next;
//          } else {
//            previousNode = currentNode;
//            currentNode = currentNode.next;
//          }
//        }
//    }
// }

function removeKFromList(l, k) {
  let currentNode = l;
  let previousNode;
  while(currentNode !== null) {
    if(l.value === k) {
       l = currentNode.next;
       currentNode = l;
     } else {
         if(currentNode.value === k) {
           previousNode.next = currentNode.next;
           currentNode = currentNode.next;
         } else {
           previousNode = currentNode;
           currentNode = currentNode.next;
         }
       }
   }
  return l;
}

module.exports = {
  removeKFromList
};
