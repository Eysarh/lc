var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) return strs[0]
  let ret = ''
  let len = strs[0].length
  for (const i of strs) {
    if (i.length < len) {
      len = i.length
    }
  }
  let flag = true
  for (let index = 0; index < len; index++) {
    let current = strs[0][index]
    for (const i of strs) {
      if (i[index] != current) {
        flag = false
      }
    }
    if (!flag) return ret
    ret += current
  }
  return ret
};

const main = () => {
  let i = longestCommonPrefix(["flower","flow","flight"])
  console.log(i)
}
main()