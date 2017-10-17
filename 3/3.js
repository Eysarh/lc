/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 1) {
    return 1
  }

  let r = 0

  let idx = 0

  while (true) {
    if(idx === s.length) {
      break
    }

    let ts = new Set()
    let l = 0
    let tidx = idx
    while (true) {
      if(tidx === s.length) {
        break
      }

      ts.add(s[tidx])

      if(ts.size === l) {

        break
      } else {
        if(r<ts.size) {
          r = ts.size
        }
        l = ts.size
        tidx += 1
      }
    }  
    idx += 1
  }

  return r
};