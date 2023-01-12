//main js file
"use strict";

//=========================================================================================
/*
Практика JS 6.
Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000]. 
Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5.
*/
const outputArray = (arr) => {
  arr.forEach(el => {
    if (el.toString().startsWith('1') || el.toString().startsWith('2') || el.toString().startsWith('5')) console.log(el);
  });
}

outputArray([10, 20, 30, 50, 235, 3000]);