var FlooringSealing = (nums, target) => {

nums.sort(function(a, b){return a-b});
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let count = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);   

    if (nums[mid] == target) {          
      count++;

      for (let i = mid - 1; i >= 0; i--) {
        if (nums[i] === target) {
          count++;
        } else {
          break;
        }
      }
      for (let i = mid + 1; i <= nums.length; i++) {
        if (nums[i] === target) {
          count++;        
        } else {
          break;
        }
      }
      return count;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

const nums = [
  10, 20, 30, 30, 30, 30, 30, 40, 40, 50, 50, 50, 50, 50, 60, 70, 80,
];

const result = FlooringSealing(nums, 30);
console.log(result);
