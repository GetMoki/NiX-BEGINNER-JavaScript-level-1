//main js file
"use strict";

//=========================================================================================
/*
Практика JS 20.
Необхідно реалізувати функцію, яка на вході приймає масив з різними 
типами даних = = gt; ['a', 1, 2, false, 'b'], а повертає об'єкт, 
у якому ці типи даних розсортовані за ключами.

Приклад коду:
{
   number: [1, 2],
   string: ['a', 'b'],
   boolean: [false]
}
*/
const sortedOject = function (list) {
  let object = new Object();
  list.forEach(el => {
    typeof el in object ? object[`${typeof el}`].splice(1, 0, el) : object[`${typeof el}`] = [el];
  });
  return object;
};
const list = ['a', 1, 2, false, 'b'];
const result = sortedOject(list);
console.log(`${list} => `) + console.dir(result);
