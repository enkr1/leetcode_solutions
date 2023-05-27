class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
var reverseList = function (head) {
  // Special case...
  if (head == null || head.next == null) return head;
  // Create a new node to call the function recursively and we get the reverse linked list...
  var res = reverseList(head.next);
  // Set head node as head.next.next...
  head.next.next = head;
  //set head's next to be null...
  head.next = null;

  console.log("res")
  console.log(res)
  return res;     // Return the reverse linked list...
};

reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
