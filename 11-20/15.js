var threeSum = function(nums) {
  if (nums.length === 3) return nums
  let ret = []
  let record = new Map()
  nums.sort()
  let center = 0
  while (center < nums.length && nums[center] < 0) {
    ++center
  }
  for (let idx1 = 0; idx1 < center; idx1++) {
    let endIdx = nums.length - 1
    for (let idx2 = (idx1 + 1); idx2 < endIdx; idx2++) {
      const find = nums[idx1] + nums[idx2]
      while (endIdx > idx2 + 1 && nums[endIdx] > -find) {
        --endIdx
      }
      if (nums[endIdx] === -find && record.get(`${nums[idx1]}-${nums[idx2]}`) == undefined) {
        record.set(`${nums[idx1]}-${nums[idx2]}`, true)
        ret.push([nums[idx1], nums[idx2], nums[endIdx]])
      }
    }
  }
  return ret
};

const main = () => {
  let i = threeSum([-1,0,1,2,-1,-4])
  console.log(i);
  
}
main()
