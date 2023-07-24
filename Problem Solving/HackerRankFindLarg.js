
var twoSum = function(nums, target) {
    console.log([nums.length-1])
   let i = 0;
   let j = nums.length-1;
   let sum = 0
   while(i < j){
    sum = nums[i] + nums[j];

    sum > target ? j--:i++ 
    
   }

return sum
};

let nums = [2,7,11,15]
let result  =twoSum(nums,9);
console.log(result)