// function partition(arr, l, r) {
//   let pivot = arr[l];

//   //count small data
//   let count = 0;

//   for (let i = l; i <= r; i++) {
//     if (arr[i] < pivot) {
//       count++;
//     }
//   }
 
//   count = count+l; 

//   let temp = arr[l];
//   arr[l] = arr[count];
//   arr[count] = temp;

//   // small data | pivot | large data
//   let i = l;
//   let j = r;
//   while (i < count || j > count) {
//     if (arr[i] > pivot && arr[j] < pivot) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;

//       i++;
//       j--;
//     } else if (arr[i] > pivot && arr[j] > pivot) {
//       j--;
//     }
    
//     else {
//       i++;
//     }
//   }
//   return count;
// }

// function quicksort(arr, l, r) {
//   if (l < r) {
//     let p = partition(arr, l, r);
//     quicksort(arr, l, p - 1);
//     quicksort(arr, p + 1, r);
//   }
// }

// let arr = [10, 20, 5, 6, 1, 30, 4];

// quicksort(arr, 0, arr.length - 1);
// console.log(arr);



function quickSort(arr) {
	// base case
	if (arr.length === 1) {
		return arr;
	}
	
	const leftArr = [];
	const rightArr = [];
	const newArr = [];
	const pivot = arr.pop();
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}
 
	return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
}
let arr = [10, 20, 5, 6, 1, 30, 4];
quickSort(arr)

