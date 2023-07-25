let arr1 = [1, 5, 8, 150, 160];
let arr2 = [17, 18, 19, 110, 111, 112, 255, 500, 600];

const mergeArr = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergeArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      mergeArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
  }
  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }
  return mergeArray;
};

const result = mergeArr(arr1, arr2);
console.log(result);
// console.log(mergeArr(arr1, arr2))
