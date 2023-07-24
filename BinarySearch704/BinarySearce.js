var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let asc;
  if (start < end) {
    asc = true;
  } else {
    asc = false;
  }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      return "data is found " + mid;
    }

    if (asc) {
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }else{
        if (nums[mid] > target) {
            start = mid + 1;
          } else {
            end = mid - 1;
          }
    }
  }
};

const nums = [-1, 0, 3, 5, 9, 12];
// const nums = [12, 9, 5, 3, 0, -1];

const result = search(nums, 9);
console.log(result);
