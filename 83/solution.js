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
const deleteDuplicates = (head) => {
  let map = new Map(), dummy = new ListNode(), result = dummy;

  while (head) {
    if (!map.has(head.val)) {
      map.set(head.val, 0);
      dummy.next = new ListNode(head.val);
      dummy = dummy.next;
    }

    head = head.next;
  }

  return result.next;
}
