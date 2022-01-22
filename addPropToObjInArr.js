function addUsersAnswer(arr) {
   // console.log(arr[0])
   return arr.map( (item) => { return addPropInObj(item) } );
 }
 function addPropInObj(obj) {
    obj.usersAnswer = null;
    return obj;
 } 

 const questions = [{
   question: "What's the currency of the USA?",
   choices: ["US dollar", "Ruble", "Horses", "Gold"],
   corAnswer: 0
}, {
   question: "Where was the American Declaration of Independence signed?",
   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
   corAnswer: 0
}];

console.log(addUsersAnswer(questions));
// const obj = {
//    question: "What's the currency of the USA?",
//    choices: ["US dollar", "Ruble", "Horses", "Gold"],
//    corAnswer: 0
// };

// console.log(addPropInObj(obj));