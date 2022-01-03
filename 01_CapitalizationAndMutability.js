function capitalizeWord(word) {
   const newWord = word[0].toUpperCase() + word.slice(1);
   return newWord;
 };

 console.log( capitalizeWord('dolphin') );