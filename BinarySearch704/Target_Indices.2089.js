// -------------------------------------using traditional for loop--------------------
// var targetIndices = function (nums, target) {
//     nums.sort(function (a, b) {
//         return a - b;
//     });
//     console.log(nums, target);
// let matchIndex = []
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if (element  == target) {
//           matchIndex.push(i)
//         }
//     }
//     return matchIndex;

// };

// const result = targetIndices([1, 2, 5, 2, 3], 20);
// console.log(result);




// -------------------------------------using binary search algorithm--------------------
var targetIndices = function (nums, target) {
  nums.sort(function (a, b) {
    return a - b;
  });
console.log(nums)
  let first = 0;
  let last = nums.length - 1;
  let mid;
  let matchIndex = [];

  while (first <= last) {
    mid = Math.floor((first + last) / 2);

    if (nums[mid] == target) {
      matchIndex.push(mid);

      for (let i = mid - 1; i >= 0; i--) {
        if (nums[i] == target) {
          matchIndex.push(i);
        }
      }
      for (let j = mid + 1; j <= nums.length; j++) {
        if (nums[j] == target) {
          matchIndex.push(j);
        }
      }
      return matchIndex.sort(function (a, b) {
        return a - b;
      });
    } else if (nums[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return matchIndex;
};

const result = targetIndices([81,7,87,77,45,70,4,20,41,8,74,88,71,28,74,41,12,16,99,13,69,34,57,74,76,88,15,1,64,10,28,89,25,12,7,69,81,39,58,79,28,27,7,87,1,66,50,93,30,76,34,22,20,89,35,42,90,22,54,50,10,20,24,44,87], 1);
console.log(result);
