function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  let num_carried = 0
  let res, curr = null;

  while (l1 || l2) {
    let num1, num2, val = 0;

    if (l1) {
      num1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num2 = l2.val;
      l2 = l2.next;
    }

    val = num1 + num2 + num_carried;

    if (val > 9) { // 10, 11, 12, etc.
      val = val - 10;
      num_carried = 1;
    } else {
      num_carried = 0;
    }

    // QUESTION: I dont understand this ifelse and how is res being set.
    if (res) {
      console.log(`--- have ${val} ---`)
      console.log("res:")
      console.log(res)
      console.log("curr:")
      console.log(curr)
      // console.log("curr.next:")
      // console.log(curr.next)

      curr.next = new ListNode(val);
      curr = curr.next;

      console.log("res:")
      console.log(res)
      console.log("curr:")
      console.log(curr)

    } else {
      console.log("dont have aka first time")
      res = new ListNode(val);
      curr = res;
    }

    // if (res) {
    //   curr.next = new ListNode(val);
    //   curr = curr.next;
    // } else {
    //   res = new ListNode(val);
    //   curr = res;
    // }

  }

  if (num_carried) curr.next = new ListNode(num_carried);

  // QUESTION: How is res being set???
  return res;
}


// addTwoNumbers([2, 4, 3], [5, 6, 4])
addTwoNumbers(
  ListNode(2, ListNode(4, ListNode(3))),
  ListNode(5, ListNode(6, ListNode(4)))
)
