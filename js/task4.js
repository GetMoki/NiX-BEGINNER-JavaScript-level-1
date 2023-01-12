//main js file
"use strict";

//=========================================================================================
/*
Практика JS 4.
Даний масив ['Саша', 'Петя', 'Оксана'], зробіть із нього ['Оксанa', 'Олег', 'Саша'].
Реалізуйте це завдання двома способами.
У першому вихідний масив має бути змінений, у другому - не може бути змінений.
*/

//the fist solution

const arrayFirst = ['Саша', 'Петя', 'Оксана'];

const getNonChangeArray = function (array) {
  array.reverse();
  array[1] = 'Олег';
  return array;
};

console.log(`[${arrayFirst}] => [${getNonChangeArray(arrayFirst)}] => [${arrayFirst}]`);

//the second solution

const arraySecond = ['Саша', 'Петя', 'Оксана'];

const getChangeArray = function (array) {
  const newArray = array.slice(0).reverse();
  newArray[1] = 'Олег';
  return newArray;
};

console.log(`[${arraySecond}] => [${getChangeArray(arraySecond)}] => [${arraySecond}]`);
