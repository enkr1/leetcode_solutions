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

  while (lists.length > 1) {
    lists.push(mergetTwoLists(lists.shift(), lists.shift()));
  }

  return lists[0];
};


const mergetTwoLists = (ll1, ll2) => {
  let dummy = new ListNode(), head = dummy;
  while (ll1 && ll2) {
    if (ll1.val <= ll2.val) {
      dummy.next = ll1;
      ll1 = ll1.next
    } else {
      dummy.next = ll2;
      ll2 = ll2.next
    }

    dummy = dummy.next;
  }

  dummy.next = (null === ll2) ? ll1 : ll2;

  return head.next;
}
