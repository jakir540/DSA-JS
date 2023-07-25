var FlooringSealing = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(mid);

    if (nums[mid] == target) {
      return "data is found " + mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ` flooring is  ${mid - 1} index and ${nums[mid-1]}` 
};

const nums = [10, 20, 30, 40, 50, 60, 70, 80];

const result = FlooringSealing(nums, 47);
console.log(result);
