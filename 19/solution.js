const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0, head),
    l = dummy,
    r = head;

  while (n > 0) {
    r = r.next;
    n--;
  }

  while (null !== r) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;

  return dummy.next;
}
