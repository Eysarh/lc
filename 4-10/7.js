/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x ===0) {
    return 0
  }
  let flag = true
  if (x < 0) {
    flag = false
    x *= -1
  }
  let s = x.toString().split('').reverse().join('').toString()
  let count = 0
  for (i of s) {
    if (i === '0') {
      count ++
    } else {
      break
    }
  }
  s = s.substr(count, s.length)
  let num
  try {
    num = parseInt(s)
  } catch (error) {
    return 0
  }
  if (num > 2147483647) {
    return 0
  }
  return flag?num:(num*-1)
};
