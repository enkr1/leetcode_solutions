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
 * @return {ListNode}
 */
const reverseList = (head) => {
  let dummy = new ListNode(), new_head = dummy;

  while (head !== null) {
    dummy.next = new ListNode(head.val, dummy.next);
    head = head.next;
  }

  return new_head.next;
};
