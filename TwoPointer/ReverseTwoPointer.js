let array = [2, 4, 5, 6, 7];

let start = 0;
let end = array.length-1;
let temp ;

while(start <= end){
     temp = array[start]
     array[start] = array[end]
     array[end] = temp;
     start++;
     end--;
}
console.log(array)