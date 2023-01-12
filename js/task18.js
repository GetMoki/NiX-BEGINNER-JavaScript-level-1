//main js file
"use strict";

//=========================================================================================
/*
Практика JS 18.
Жодних розмов. Жодних пояснень. Тільки ТЗ та результат, який має бути. Подивіться, що має вийти на виході і напишіть цю функцію.

Приклад коду:
spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
*/

const spacey1 = function (array) {
  let newArray = new Array();

  for (let i = 0; i < array.length; i++) {
    let counter = new Array();

    for (let j = 0; j < i + 1; j++) {
      counter += array[j];
    }
    newArray[i] = counter;
  }
  console.log(`[${array}] => [${newArray}]`);
}
spacey1(['kevin', 'has', 'no', 'space']);
spacey1(['this', 'cheese', 'has', 'no', 'holes']);
/*
Другий варіант рішення
*/
function spacey(list) {
  return list.reduce((acc, current) => [...acc, acc.slice(-1) + current], [])
}


console.log(spacey(['kevin', 'has', 'no', 'space']));
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));