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
const reverseList = (head) => {
  let dummy = new ListNode(), new_head = dummy;

  while (head !== null) {
    dummy.next = new ListNode(head.val, dummy.next);
    head = head.next;

    console.log("dummy")
    console.log(dummy)
    console.log("dummy.next")
    console.log(dummy.next)
    // dummy = dummy.next;
  }

  return new_head.next;
};

reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
