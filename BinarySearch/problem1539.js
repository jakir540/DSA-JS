function find(arr, k) {
  console.log(arr);
  let mA = [];
  let i = 0;
  let n = 1;
  while (true) {
    console.log(n);
    if (n == arr[i]) {
      console.log(n)
      i++;
      n++;
    } else {     
      mA.push(n);
      n++;
     if (mA.length > k) {
        break;
      }
    }
  }
  return mA[k-1];
}
let arr = [2, 3, 4, 7, 11];
let k = 5;
let result = find(arr, k);
console.log(result);


// function sum(n ) {
// let i = 0;
// let sum = 0
// while (i <n.length) {
//   sum = sum + n[i];
//   i++;
// }
// return sum;
// }

// let n= [10,20,30,40];
// let result = sum(n);
// console.log(result);