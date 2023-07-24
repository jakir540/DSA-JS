const findMedian = (num1, num2) => {
  let compare = (i, j) => {
    return i - j;
  };

  let arr = num1.concat(num2).sort(compare);
  console.log(arr)
  if (arr.length % 2 == 0) {
    console.log(arr.length)
    let left = arr[arr.length /2 -1];
    let right = arr[arr.length/2]
    console.log(left)
    console.log(right)
    return left + right/2;
  }
  return arr[Math.floor(arr.length / 2)];
};

let num1 = [3, 5, 7, 10, 15];
let num2 = [2, 4, 12,20];
let result = findMedian(num1, num2);
console.log(Math.floor(result));
