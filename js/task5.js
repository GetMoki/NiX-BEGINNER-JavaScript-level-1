//main js file
"use strict";

//=========================================================================================
/*
Практика JS 5.
Напишіть скрипт, який приймає з клавіатури 2 числа, 
і якщо перше більше за друге, то виводить на екран їх суму, 
якщо ж навпаки - добуток. Якщо числа однакові, виводить на екран цифри однакові.
*/

const initNumber = function (num1, num2) {
  alert('Enter two unequal numbers in turn: ');
  do {
    num1 = +prompt('Enter your firts number here: ');
    num2 = +prompt('Enter your secont number here: ');
  } while (num1 == num2)
  return [num1, num2];
}

const ComparingNumbers = function (num1, num2) {
  return num1 > num2 ? num1 + num2 : num1 * num2;
}

let num1 = 0;
let num2 = 0;
[num1, num2] = initNumber(num1, num2);

console.log(`JS Task 5:
First number: ${num1}
Second number: ${num2}
Result: ${ComparingNumbers(num1, num2)}
`);