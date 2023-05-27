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
  // let slow = head, fast = head.next;//, reversed = new ListNode(), dummy = new ListNode(), result = dummy;
  // while (fast && fast.next) {
  //   slow = slow.next
  //   fast = fast.next.next;
  // }
  //
  // console.log("slow")
  // console.log(slow)
  // console.log("fast")
  // console.log(fast)

  let slow = head, fast = head, counter = head, reversed = new ListNode(), dummy = new ListNode(), result = dummy;

  // console.log("fast")
  // console.log(fast)

  // let count = 0;
  // while (counter.next) {
  //   count++;
  //   counter = counter.next;
  // }

  // while (count > 0) {
  //   reversed.next = new ListNode(fast.val, reversed.next);
  //   fast = fast.next;
  // }

  console.log("slow")
  console.log(slow)
  reversed = reversed.next;
  console.log("reversed")
  console.log(reversed)
  console.log("count: " + count)

  while (slow || reversed) {
    // console.log(`-> slow:${slow.val} & reversed:${reversed.val}`)
    // when reversed is null (on case of 3 linked list only), or  same values.
    if ((null === reversed) || (reversed && (slow.val === reversed.val))) {
      // if (slow.val === reversed.val) {
      console.log('------------------> FOUnd same')
      console.log(dummy)
      slow.next = null;
      dummy.next = slow;
      slow = null;
      reversed = null;
    } else {
      // dummy.next = new ListNode(slow.val, reversed);
      dummy.next = slow;
      slow = slow.next;
      dummy = dummy.next;

      dummy.next = reversed;
      reversed = reversed.next;
      dummy = dummy.next;

      console.log("---> dummy")
      console.log(dummy)
    }

  }
  result = result.next
  console.log("result")
  console.log(result)
  while (result) {
    console.log("check")
    console.log(result.val)
    result = result.next;
  }
};



// reorderList(
//   new ListNode(1,
//     new ListNode(2,
//       new ListNode(3,
//         new ListNode(4))
//     )
//   )
// )

// reorderList(
//   new ListNode(1,
//     new ListNode(2,
//       new ListNode(3)
//     )
//   )
// )


reorderList(
  new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5))))))
