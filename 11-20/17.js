/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let m = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ])
  if (digits == "") return []
  if (digits.length === 1) return [...m.get(digits)]
  const recurse = (res, digits, currentStr, nextIdx, m, length) => {
    if (nextIdx === (length-1)) {
      const s = m.get(digits[nextIdx])
      for (const i of s) {
        res.push(currentStr+i)
      }
      return
    }
    
    const nextStrings = m.get(digits[nextIdx])
    for (const i of nextStrings) {
      recurse(res, digits, currentStr+i, nextIdx+1, m, digits.length)
    }
  }
  let res = []
  let first = m.get(digits[0])
  for (let idx = 0; idx < first.length; idx++) {
    const element = first[idx];
    recurse(res, digits, element, 1, m, digits.length)
  }
  return res
  
};

letterCombinations("234")
