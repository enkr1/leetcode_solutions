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

  let secondHalf = slow.next;
  slow.next = null; // This is the magical part that breaks the links

  let prev = null
  while (secondHalf) {
    let tmp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = tmp;
  }
  let part2 = prev, part1 = head;

  while (part2) {
    let tmp1 = part1.next,
      tmp2 = part2.next;

    part1.next = part2; // Link to node of reversed part
    part2.next = tmp1; // Link to the tmp of the next of part1

    part1 = tmp1;
    part2 = tmp2;
  }
};
