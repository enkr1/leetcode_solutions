class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Split the list into two halves
  let secondHalf = slow.next;
  slow.next = null;

  // Step 3: Reverse the second half of the linked list
  let prev = null;
  let current = secondHalf;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  secondHalf = prev;

  // Step 4: Merge the first half and reversed second half alternately
  let current1 = head;
  let current2 = secondHalf;
  while (current2) {
    let nextNode1 = current1.next;
    let nextNode2 = current2.next;

    current1.next = current2;
    current2.next = nextNode1;

    current1 = nextNode1;
    current2 = nextNode2;
  }

  return head;
}
