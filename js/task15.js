//main js file
"use strict";

//=========================================================================================
/*
Практика JS 15.
Ви повинні реалізувати функцію, яка повертає різницю між найбільшим та найменшим значенням
у списку , отриманому як аргумент функції. Масив, який отримує функція як аргумент, 
може містити позитивні та негативні числа. Якщо масив порожній або має значення, 
поверніть нуль. Спочатку масив буде поданий у невідсортованому вигляді. 
Приклад: maxDiff([1, 2, 3, -4]); // Поверне 7, тому що: 3 - (-4) == 7

Приклад коду:
maxDiff([0, 1, 2, 3, 4, 5, 6]) => 6
maxDiff([-0, 1, 2, -3, 4, 5, -6]) => 11
maxDiff([0, 1, 2, 3, 4, 5, 16]) => 16
maxDiff([16]) => 0
maxDiff([]) => 0
*/

const getArray = function () {
  let ex = new String();
  do {
    ex = prompt(`Enter your array with spaces between numbers: `);
    ex = ex.split(' ');
  } while (ex.length < 0)
  return ex;
}
const maxDiff = function (arr) {
  return (arr[arr.length - 1] - arr[0]);
}

const getMessage = function () {
  const array = getArray();
  const staticArray = array.slice(0);
  const sortArray = array.sort(function (a, b) { return a - b });
  const diff = maxDiff(sortArray);
  console.log(`maxDiff([${staticArray}]) => ${diff}`);
}
getMessage();