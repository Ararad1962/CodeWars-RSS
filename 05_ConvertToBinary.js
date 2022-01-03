function toBinary(n){
   let i = n;
   let binary = '';
   
   while ( i >= 1 ) {
      
      if (i%2 != 0) {
         binary = '1' + binary;
      } else {
         binary = '0' + binary;
      };

      i = Math.floor(i/2)
   
   };
   
   n = +binary; 
   
   return n;
 };

 console.log(toBinary(1));
 console.log(toBinary(5));
 console.log(toBinary(11));