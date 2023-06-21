/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let s = 0, f = 0, sHead = head, fHead = head;
  while (null !== fHead) {
    if (null === fHead.next) return sHead;
    sHead = sHead.next;
    fHead = fHead.next.next;
    if (null === fHead) return sHead;
  }
};
