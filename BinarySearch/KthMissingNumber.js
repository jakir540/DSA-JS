let arr = [2, 4, 7, 10, 11, 14];
target = 5;

let i = 0;
let n = 1;
let missingArr = [];
while (missingArr.length <= target) {
  if (arr[i] == n) {
    console.log(arr[i]);
    i++;
    n++;
  } else {
    missingArr.push(n);
    n++;
    console.log(missingArr);
  }
}
missingArr;
console.log(missingArr[target - 1]);
