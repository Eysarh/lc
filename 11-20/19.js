/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head
    let t = head
    let i = 0
    while (i < n-1) {
        p = p.next
        ++i
    }
    if (p.next === null) return head.next

    p = p.next
    while (p.next !== null) {
        t = t.next
        p = p.next
    }
    t.next = t.next.next
    return head
};

