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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (null === list1) return list2;
  if (null === list2) return list1;

  // dummy & head
  let dummy = new ListNode(), head = dummy;

  // go thru the linked list if either is null, update it a to b
  while (list1 && list2) {
    // console.log(`--> list`)
    // console.log("-> list1")
    // console.log(list1)
    // console.log("-> list2")
    // console.log(list2)
    console.log("--> dummy")
    console.log(dummy)
    console.log(`----> A:${list1.val}, B:${list2.val}`)
    // asc => check min
    if (list1.val <= list2.val) {
      // dummy.next = new ListNode(list1.val);
      dummy.next = list1;
      list1 = list1.next;
      // console.log("New list1")
      // console.log(list1)
    } else {
      // dummy.next = new ListNode(list2.val);
      dummy.next = list2;
      list2 = list2.next;
      // console.log("New list2")
      // console.log(list2)
    }

    // NOTE: THISISS!!!!!!!!
    dummy = dummy.next;

    // carry on the while if needed
    dummy.next = (null === list1) ? list2 : list1;
  }


  console.log("head")
  console.log(head.next)

  return head.next;
};
mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))))
