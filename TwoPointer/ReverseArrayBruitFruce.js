let array = [2, 4, 5, 6, 7];

let temp = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    console.log(j);
    temp = array[i];
    array[i]= array[j]
    array[j] = temp;
  } 

  console.log(array);
}
console.log(array);
