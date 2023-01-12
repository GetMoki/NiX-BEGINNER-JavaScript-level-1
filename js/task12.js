//main js file
"use strict";

//=========================================================================================
/*
Практика JS 12.
Завершіть функцію, яка приймає два цілих числа ( a, b, де a <  b)
і повертає масив усіх цілих чисел між вхідними параметрами, включаючи їх.

Приклад коду:
between(1, 4) => [1, 2, 3, 4]
between(-2, 2) => [-2, -1, 0, 1, 2]
between(20, 25) => [20, 21, 22, 23, 24, 25]
*/

const initNumber = function () {
  let a, b = new Number;
  do {
    alert('Enter two numbers where first number smaller second');
    a = +prompt('Enter first number (a < b): ');
    b = +prompt('Enter first number (a < b): ');
  } while (!(a < b))
  return [a, b];
}

const findRange = function (a, b) {
  let array = new Array;
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return [array];
}

const getMessage = function () {
  let [a, b] = initNumber();
  let [array] = findRange(a, b);
  alert(`This is the range of numbers between your numbers: \n[${array}]`)
}

getMessage();