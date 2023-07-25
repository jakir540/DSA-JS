let num=[1,1,2,3,3,4,4,8,8];

function BinarySearch(nums,target){
    let start = 0;
    let end = num.length-1
    let count = 0;
    let newArr=[]
    while(start<=end){
        let mid =Math.floor((start+end)/2);
        if (nums[mid]===target) {
            count++
            console.log(mid)
            // return mid
        }
        else if(nums[mid] < target){
            start=mid+1;
            
        }else{
            end=mid-1
        }
    }
    return -1;
}

console.log(BinarySearch(num,3));