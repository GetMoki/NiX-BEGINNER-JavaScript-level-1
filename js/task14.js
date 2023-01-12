//main js file
"use strict";

//=========================================================================================
/*
Практика JS 14.
Видаліть n знаків оклику в пропозиції зліва направо. n – позитивне ціле число.

Приклад коду:
  remove("Hi!",1) => "Hi"
  remove("Hi!",100) => "Hi"
  remove("Hi!!!",1) => "Hi!!"
  remove("Hi!!!",100) => "Hi"
  remove("!Hi",1) => "Hi"
  remove("!Hi!",1) => "Hi!"
  remove("!Hi!",100) => "Hi"
  remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"
*/

const remove = function (str, base) {
  if (base != 0 || base != undefined) {
    for (let i = 0; i < base; i++) {
      str = str.replace('!', "");
    }
  }
  return str;
}

console.log(remove("Hi!", 1));
console.log(remove("Hi!", 100));
console.log(remove("Hi!!!", 1));
console.log(remove("Hi!!!", 100));
console.log(remove("!Hi", 1));
console.log(remove("!Hi!", 1));
console.log(remove("!Hi!", 100));
console.log(remove("!!!Hi !!hi!!! !hi", 1));
console.log(remove("!!!Hi !!hi!!! !hi", 3));
console.log(remove("!!!Hi !!hi!!! !hi", 5));
console.log(remove("!!!Hi !!hi!!! !hi", 100));
