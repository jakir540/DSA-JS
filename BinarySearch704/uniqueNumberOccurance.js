var uniqueOccurrences = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);

  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

const result = uniqueOccurrences([3,5,-2,-3,-6,-6]);
console.log(result);
