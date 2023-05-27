/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const removeNthFromEnd = (head, n) => {
  // l = slow, r = fast
  let dummy = new ListNode(0, head),
    l = dummy,
    r = head;

  while (n > 0) {
    r = r.next;
    n--;
  }

  while (null !== r) {
    l = l.next;
    r = r.next;
  }

  // QUESITON: I dont understand this part
  // Delete the node
  l.next = l.next.next;

  return dummy.next;
}

let x = new ListNode(0, new ListNode(2, new ListNode(4))),
  y = x;
console.log(y)

x.next.next = null;
console.log(x)
