//main js file
"use strict";

//=========================================================================================
/*
Практика JS 17.
Виверт, який я вивчив у початковій школі, щоб визначити, чи ділиться число на три, 
полягає в тому, щоб скласти всі цілі числа в числі і розділити отриману суму на три. 
Якщо від поділу суми на три немає залишку, то вихідне число також поділяється на три. 
Враховуючи серію цифр у вигляді рядка, визначте, чи число, подане рядком, ділиться на три. 
Примітка: Уникайте використання оператора % (залишок від поділу). 
Число, яке прийматиме функція - завжди буде рядок.

Приклад коду:
divisibleByThree('123') => true
divisibleByThree('19254') => true
divisibleByThree('88') => false
divisibleByThree('1') => false
*/

const getNumber = function () {
  let ex = '';
  do {
    ex = prompt(`Enter your numbers: `);
  } while (ex.length < 0)
  return ex;
}
const calcSum = function (str) {
  let sum = new Number();
  for (const value of str) {
    sum += value;
  }
  return sum;
}
const divisibleByThree = function (str) {
  const sum = calcSum(str);
  return Number.isInteger(sum / 3) ? true : false;
}
const getMesseger = function () {
  const example = getNumber();
  const answer = divisibleByThree(example);
  console.log(`divisibleByThree('${example}') => ${answer}`);
}
getMesseger();
getMesseger();
getMesseger();
getMesseger();
