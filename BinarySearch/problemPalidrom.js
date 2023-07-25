var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  if (n < 1) return false;
  let sqrt = Math.floor(Math.sqrt(n));
  console.log(sqrt)

  let power = Math.pow(2, sqrt);

  if (n == power) {
    return true;
  } else return false;
};

let n = 8;
let result = isPowerOfTwo(n);
console.log(result);
