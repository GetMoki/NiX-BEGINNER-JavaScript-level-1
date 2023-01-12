//main js file
"use strict";

//=========================================================================================
/*
Практика JS 21.
Дано рядок, що складається з букв a, b, c. Ваше завдання змінити розташування літер a та b, але не чіпати c.

Приклад коду:
switcheroo('abc') =>'bac'
switcheroo('aaabcccbaaa') =>'bbbacccabbb'
switcheroo('ccccc') =>'ccccc'
switcheroo('acb') =>'bca'
switcheroo('aabacbaa') =>'bbabcabb'
*/

const switcheroo = function (str) {
  const newStr = str.replace(/(a)|b/g, (_, a) => a ? "b" : "a");
  console.log(`${str} => ${newStr}`);
}
switcheroo('abc');
switcheroo('aaabcccbaaa');
switcheroo('ccccc');
switcheroo('acb');
switcheroo('aabacbaa');
