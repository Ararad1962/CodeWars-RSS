function add(num1, num2) {
  let num1New = num1.toString().split('').reverse();
  let num2New = num2.toString().split('').reverse();
  let arr = new Array;
  
  (num1New.length >= num2New.length) ? n = num1New.length : n = num2New.length;

   // if (num1New.length < num2New.length) {
   //   for (let i = 0; i <= num2New.length - num1New.length; i++) {
   //      num1New.unshift('0');
   //       } 
   // } else {
   // if (num1New.length > num2New.length) {
   //    for (let i = 0; i <= num1New.length - num2New.length; i++) {
   //       num2New.unshift('0');
   //        }
   //  }
   // }
   for (let i = 0; i < n; i++) {
      if (num1New.length > num2New.length) {
      };
      arr.push( (parseInt(num1New[i]) || 0) + (parseInt(num2New[i]) || 0) );
   };
   


return Number(arr.reverse().join(''));
 };

 const num1 = 54;
 const num2 = 155513;

 console.log(add(num1, num2));