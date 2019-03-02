var romanToInt = function(s) {
  let ret = 0
  l2 = s.length - 1
  const m = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  for (let index = 0; index < s.length; index++) {
    ret += m.get(s[index])
    let d = `${s[index]}${s[index+1]}`
    switch (d) {
      case 'IV':
        ret -= 2
        break;
      case 'IX':
        ret -= 2
        break;
      case 'XL':
        ret -= 20
        break;
      case 'XC':
        ret -= 20
        break;
      case 'CD':
        ret -= 200
        break;
      case 'CM':
        ret -= 200
        break;
      default:
        break;
    }
  }
  return ret
}

const main = () => {
  let i = romanToInt('LVIII')
  console.log(i)
}
main()