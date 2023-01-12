//main js file
"use strict";

//=========================================================================================
/*
Практика JS 11.
У цій вправі повинні написати програму, яка прийматиме як параметри два масиви цілих чисел.
Необхідно знайти добуток кожного масиву, після чого знайти різницю двох масивів, 
незалежно від того, який з них більше. Якщо напишіть рішення в один рядок, будете молодці.


Приклад коду:
example([3, 2, 5], [1, 4, 4]) => 14
example([9, 7, 2], [5, 2, 2]) => 106
example([11, 2, 5], [1, 10, 8]) => 30
example([4, 4, 7], [3, 9, 3]) => 31
example([15, 20, 25], [10, 30, 25]) => 0
*/

const newCalc = (arr1, arr2) => { return (arr1.reduce((sum, curent) => sum *= curent)) - (arr2.reduce((sum, curent) => sum *= curent)) };

const getMessage = function (arr1, arr2) {
  let result = newCalc(arr1, arr2);
  console.log(`example([${arr1}], [${arr2}]) => ${result}`);
}

getMessage([3, 2, 5], [1, 4, 4]);
getMessage([9, 7, 2], [5, 2, 2]);
getMessage([11, 2, 5], [1, 10, 8]);
getMessage([4, 4, 7], [3, 9, 3]);
getMessage([15, 20, 25], [10, 30, 25]);
