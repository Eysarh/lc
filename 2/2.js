/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}




var addTwoNumbers = function(l1, l2) {
  let n1 = 0
  let n2 = 0
  let up = false
  let tl1 = l1
  let tl2 = l2
  let r = null
  let tr = null
  let n
  while (true) {

    if(tl1 === null && tl2 === null && up===false) {
        break
    }

    if(tl1 === null) {
      n1 = 0
    } else {
      n1 = tl1.val
    }
    //(tl1===null)? n1 = 0 : n1 = (tl1.val)
    (tl2===null)? n2 = 0 : n2 = tl2.val
    n = n1 + n2
      

    if(up == true) {
      n += 1
      up = false
    }

    if(n >= 10) {
      n = n - 10
      up = true
    }

    if(r === null) {
      r = new ListNode(n)
      tr = r
    } else {
      tr.next = new ListNode(n)
      tr = tr.next
    }
    if(tl1 !== null) {
      tl1 = tl1.next
    }
    if(tl2 !== null) {
      tl2 = tl2.next
    }

  }
  return r
}

// let i1 = new ListNode(2)
// let i2 = new ListNode(4)
// let i3 = new ListNode(3)

// i1.next = i2
// i2.next = i3
// i3.next = null


// let j1 = new ListNode(5)
// let j2 = new ListNode(6)
// let j3 = new ListNode(4)

// j1.next = j2
// j2.next = j3
// j3.next = null


// let r = addTwoNumbers(i1,j1)

// console.log(r)




