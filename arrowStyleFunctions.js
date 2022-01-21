const arr1 = [84,101,115,116];
const arr2 = [70,85,83,32,82,79,72,32,68,65,72]

var ArrowFunc = function(arr) {
   return arr.map(elem => String.fromCharCode(elem)).join(''); //Complete this function
 };


 console.log(ArrowFunc(arr1));
 console.log(ArrowFunc(arr2));