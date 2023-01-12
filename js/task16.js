//main js file
"use strict";

//=========================================================================================
/*
Практика JS 16.
Напишіть функцію, яка приймає рядок і число. 
Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.

Приклад коду:
example('Сьогодні чудовий день. З самого ранку ми підемо на озеро, купатися.', 5) => 
['Сьогодні', 'чудовий', 'самого', 'підемо', 'купатися']
example('Над містом хмари, коридори, береги, проспект, річка.', 7) => ['коридори', 'проспект']
*/

const getArguments = function () {
  let ex = new String();
  let num = new Number();
  do {
    ex = prompt('Enter there your sentences: ');
  } while (ex < 0)
  do {
    num = +prompt('Enter the length of words to save');
  } while (num > 0 && (typeof num) === Number)
  return [ex, num];
}
const filterArray = function (arr, num) {
  let array = arr.split(' ');
  return array.filter((el) => el.length > num);
}
const getMessage = function () {
  const [sentences, lenght] = getArguments();
  const staticSentences = sentences;
  const filteredArray = filterArray(sentences, lenght);
  alert(`example('${staticSentences}', ${lenght}) => [${filteredArray}]`);
}
getMessage();
