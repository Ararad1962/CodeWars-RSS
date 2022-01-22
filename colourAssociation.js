function colourAssociation(array){

   return array.map(value => ( { [value[0]]: value[1] } ) );
}
   // const arrayNew = array.map((value) => {return convertArrToObj(value) });
   // return arrayNew;
   // }
   // function convertArrToObj (arr) {
   //    const obj ={};
   //    obj[arr[0]] = arr[1];
   //    return obj;
   // };

  arr1 = [["white", "goodness"], ["blue", "tranquility"]];
  arr2 = [["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]];
  
  console.log( colourAssociation(arr1));





   


