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
  let slow = head, fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  /*

  In the provided code, the original implementation splits the linked list into two halves by setting the slow.next pointer to null. This is done to separate the first half (head to slow) from the second half (slow.next to the end).

  The reason for setting slow.next = null is to disconnect the two halves so that the second half can be reversed independently. This ensures that the first half doesn't have any reference to the reversed second half. It simplifies the merging step later.

  In your suggested code, you're attempting to reverse the second half while keeping the reference to the first half intact. While it's possible to reverse the second half this way, it would make the merging step more complex since you'd need to traverse both the first and reversed second halves simultaneously to interleave the nodes.

  */
  //   // MY REVERSE: -- DOES NOT WORK
  //   slow = slow.next; // Shift from [2,3,4] -> [3,4] in order to reverse as full LL -> [1,2,3,4]
  //   console.log("-> slow")
  //   console.log(slow)
  //
  //   let part2 = new ListNode(); // reversed
  //   while (slow) {
  //     part2.next = new ListNode(slow.val, part2.next)
  //     slow = slow.next;
  //   }
  //   part2 = part2.next;
  //   // Reversed
  //   console.log("---> Reversed -> part2")
  //   console.log(part2)
  //   console.log("_____________________________")
  //   let part1 = head;

  // ONLINE:
  let secondHalf = slow.next;
  slow.next = null; // This is the magical part that breaks the links
  // console.log("curr")
  // console.log(curr)

  let prev = null
  while (secondHalf) {
    let tmp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = tmp;
  }
  let part2 = prev;

  // Reversed
  console.log("Reversed -> part2")
  console.log(part2)
  // console.log("prev")
  // console.log(prev)
  // let part2 = prev;

  let part1 = head;

  console.log("-> part1")
  console.log(part1)

  // console.log("part1 check")
  // while (part1) {
  //   console.log(part1.val)
  //   part1 = part1.next;
  // }

  while (part2) {

    // console.log("-> part2")
    // console.log(part2)

    let tmp1 = part1.next,
      tmp2 = part2.next;

    console.log("tmp1 & tmp2")
    console.log(tmp1)
    console.log(tmp2)

    part1.next = part2; // Link to node of reversed part
    part2.next = tmp1; // Link to the tmp of the next of part1

    part1 = tmp1;
    part2 = tmp2;
    console.log("ending ->")
    console.log(part1)
    console.log(part2)
  }

  // console.log("part1 <-")
  // console.log(part1)
  // console.log("part2")
  // console.log(part2)

  console.log("head check")
  while (head) {
    console.log(head.val)
    head = head.next;
  }

};



reorderList(
  new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4))
    )
  )
)

// reorderList(
//   new ListNode(1,
//     new ListNode(2,
//       new ListNode(3)
//     )
//   )
// )


// reorderList(
//   new ListNode(1,
//     new ListNode(2,
//       new ListNode(3,
//         new ListNode(4,
//           new ListNode(5)
//         )
//       )
//     )
//   )
// )
