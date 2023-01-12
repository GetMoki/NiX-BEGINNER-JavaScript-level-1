//main js file
"use strict";

//=========================================================================================
/*
Практика JS 13.
Напишіть функцію, яка перетворює шістнадцяткове число (задане у вигляді рядка) 
на десяткове число.

Приклад коду:
hexToDec('1') => 1
hexToDec('a') => 10
hexToDec('10') => 16
hexToDec('FF') => 255
hexToDec('-C') => 12
*/

const getMessage = function (str) {
  const number = parseInt(str, 16);
  console.log(`hexToDec('${str}') => ${number}`);
}


getMessage('1');
getMessage('a');
getMessage('10');
getMessage('FF');
getMessage('-C');