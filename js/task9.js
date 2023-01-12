//main js file
"use strict";

//=========================================================================================
/*
Практика JS 9.
Напишіть функцію, яка приймає масив, а повертає добуток елементів масиву, помножених по порядку один на одного.

Приклад коду:
example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24
*/

const getProduct = function (arr) {
  return arr.reduce((sum, count) => sum *= count);
}

console.log('Your mass [1, 2, 3, 4] => ' + getProduct([1, 2, 3, 4]));