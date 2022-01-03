function fakeBin(x){
   let out = '';
  for (let i = 0; i < x.length; i++) {
      if (x[i] < 5 ) { 
         out += 0;
      } else {
         out += 1;
      };
   };
   return console.log(out);
};

fakeBin('45385593107843568');
fakeBin('148952');
fakeBin('366058562030849490134388085');