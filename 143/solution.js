// Reorder List

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

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  if (null === head.next) return head;
  let slow = head, fast = head.next.next, reversed = new ListNode(), dummy = new ListNode(), result = dummy;

  while (fast) {
    reversed.next = new ListNode(fast.val, reversed.next);
    fast = fast.next;
  }

  reversed = reversed.next;

  while (slow && reversed) {
    if (slow.val === reversed.val) {
      dummy.next = reversed;
      slow = null;
      reversed = null;
    } else {
      dummy.next = slow;
      slow = slow.next;
      dummy = dummy.next;

      dummy.next = reversed;
      reversed = reversed.next;
      dummy = dummy.next;
    }

  }
  head = result.next;
};
