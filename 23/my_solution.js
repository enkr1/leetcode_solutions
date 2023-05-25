class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  if (0 === lists.length) return null;
  // if (1 === lists.length) return lists;

  while (lists.length > 1) {
    lists.push(mergetTwoLists(lists.shift(), lists.shift()));
  }
  // while (lists.length > 1) {
  //   console.log("___")
  //   console.log(lists)
  //   let mergedLists = mergetTwoLists(lists.shift(), lists.shift())
  //   lists.push(mergedLists);
  // }

  console.log("result")
  console.log(lists[0])

  return;
};


const mergetTwoLists = (ll1, ll2) => {
  let dummy = new ListNode(), head = dummy;
  while (ll1 && ll2) {
    console.log(`ll1.val:${ll1.val}, ll2.val:${ll2.val}`)
    if (ll1.val <= ll2.val) {
      dummy.next = ll1;
      ll1 = ll1.next
    } else {
      dummy.next = ll2;
      ll2 = ll2.next
    }

    dummy = dummy.next;

    // edge case
    // console.log("result")
    // console.log(result)
    // console.log("ll1")
    // console.log(ll1)
    // console.log("ll2")
    // console.log(ll2)
  }

  // console.log("ll1")
  // console.log(ll1)
  // console.log(ll1 === null)
  // console.log("ll2")
  // console.log(ll2)
  // console.log(ll2 === null)
  //
  if (null === ll2) {
    console.log("Hereeeee")
    dummy.next = ll1;
  } else {
    dummy.next = ll2;
  }

  return head.next;
}


// [[1,4,5],[1,3,4],[2,6]]
// mergeKLists([
//   new ListNode(1,
//     new ListNode(4,
//       new ListNode(5))),
//   new ListNode(1,
//     new ListNode(3,
//       new ListNode(4))),
//   new ListNode(2,
//     new ListNode(6))
// ])

// mergeKLists([
//   new ListNode(1,
//     new ListNode(4,
//       new ListNode(5)))
// ])

mergeKLists([])
