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

  // go thru all the nodes, check if they are in the map. if yes: skip, if no, then add.
  while (head) {
    console.log(map)
    console.log(map.get(head.val))
    if (!map.has(head.val)) {
      console.log(`${head.val} cant be found in map`)
      // let tmp = head.next
      // head.next = null;
      map.set(head.val, 0);
      dummy.next = new ListNode(head.val);
      // head = tmp; // move head up
      dummy = dummy.next; //
    } else {
      console.log(`Found ${head.val}!`)
      // in the map, stop the link
    }

    head = head.next; // move head up
  }

  console.log(map)

  console.log("result")
  console.log(result)

  return result.next;

}

deleteDuplicates(
  new ListNode(1,
    new ListNode(1,
      new ListNode(2,
        new ListNode(3
        )
      )
    )
  )
)
