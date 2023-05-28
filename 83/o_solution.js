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
  let result = head;

  while (head) {
    let curr = head;
    while (head.next && curr.val === head.next.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  console.log("result")
  // console.log(result)
  while (result) {
    console.log(result.val)
    result = result.next;
  }

  return result;
}

deleteDuplicates(
  new ListNode(1,
    new ListNode(1,
      new ListNode(1,
        new ListNode(2,
          new ListNode(2,
            new ListNode(2,
              new ListNode(3,
                new ListNode(3
                )
              )
            )
          )
        )
      )
    )
  )
)
