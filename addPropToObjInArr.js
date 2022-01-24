// function addUsersAnswer(arr) {
//    // console.log(arr[0])
//    return arr.map( (item) => { return addPropInObj(item) } );
//  }
//  function addPropInObj(obj) {
//     obj.usersAnswer = null;
//     return obj;
//  } 
let questions = [{
   question: "What's the currency of the USA?",
   choices: ["US dollar", "Ruble", "Horses", "Gold"],
   corAnswer: 0
}, {
   question: "Where was the American Declaration of Independence signed?",
   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
   corAnswer: 0
}];

questions = questions.map((v) => {v.usersAnswer = null;
   return  v;
});



 

console.log(questions);
// const obj = {
//    question: "What's the currency of the USA?",
//    choices: ["US dollar", "Ruble", "Horses", "Gold"],
//    corAnswer: 0
// };

// function addUsersAnswer(arr) {
//    const arrNew = arr.map(item => item[usersAnswer] = null);
//    console.log(arrNew);
//    return arrNew;

// console.log(addPropInObj(obj));