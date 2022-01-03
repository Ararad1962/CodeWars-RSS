function isDivideBy(number, a, b) {
   const resA = number % a;
   const resB = number % b;
   if (resA == 0 && resB == 0) {
      return true;
   }; // good luck
   return false;
 };

 console.log( isDivideBy( -12, 2, -6) );
 console.log( isDivideBy( -12, 2, -5) );
 console.log( isDivideBy( 45, 1, 6) );
 console.log( isDivideBy( 45, 5, 15) );
 console.log( isDivideBy( 4, 1, 4) );
 console.log( isDivideBy( 15, -5, 3) );