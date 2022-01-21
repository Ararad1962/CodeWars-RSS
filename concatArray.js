function mergeArrays(arr1, arr2) {
   const arr = [];
  return Array.from(new Set(arr.concat(arr1, arr2).sort((a, b) => a-b)));
};

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];

console.log (mergeArrays(arr5, arr6));