/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => { // Bad memory O(n)
  let hashMap = new Map();

  while (null !== head) {
    if (undefined !== hashMap.get(head)) return true;

    hashMap.set(head, 0);
    head = head.next;
  }

  return false;
}
