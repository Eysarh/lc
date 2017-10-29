/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  let start = 0
  let end = 0

  let r

  let getLength = (s,l,r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      --l
      ++r
    }
    return (r - l - 1)
  }

  for(let i =0;i<s.length;++i) {
    let l1 = getLength(s,i,i)
    let l2 = getLength(s,i,i+1)
    let l
    l1>l2?l=l1:l=l2

    if(l > (end- start+1)) {
      if(l%2 === 0) {
        start = i - l/2 + 1
        end = i + l/2
      } else {
        start = i - Math.floor(l/2)
        end = i + Math.floor(l/2)
      }
    }
  }  
  r = s.substring(start,end+1)
  return r
};