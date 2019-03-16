var threeSumClosest = function(nums, target) {
  const sf = (a, b) => {
    return a - b
  }
  nums.sort(sf)

  let minDiff = Math.abs(nums[0] + nums[1] + nums[2] - target) + 1, minSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let start = i+1, end = nums.length-1, current = nums[i]
    while (start < end) {
      let diff = current + nums[start] + nums[end] - target
      if (Math.abs(diff) < minDiff) {
        minDiff = Math.abs(diff)
        minSum = current + nums[start] + nums[end]
        if (minDiff === 0) return minSum

        let startTemp = start, endTemp = end
        while (start<end && nums[start]==nums[start+1]) start++;
        while (start<end && nums[end]==nums[end-1]) end--;
        if (start != startTemp) start--;
        if (end != endTemp) end++;
      } else {
        diff>0?end--:start++
      }
    }
  }
  return minSum
}