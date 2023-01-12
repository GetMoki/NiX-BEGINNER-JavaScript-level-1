//main js file
"use strict";

//=========================================================================================
/*
Практика JS 19.
Якщо число парне, перетворіть його на двійкове. '
Якщо число непарне, перетворіть його на шістнадцяткове.

Приклад коду:
evensAndOdds(2) => '10'
evensAndOdds(13) => 'd'
*/
const evensAndOdds = function (num) {
  if (num % 2 == 0) {
    return +((num).toString(2));
  } else {
    return (num).toString(16);
  }
}
console.log(`The result
  evensAndOdds(2) => ${evensAndOdds(2)}
  evensAndOdds(13) => ${evensAndOdds(13)}`);

