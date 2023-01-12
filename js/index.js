//main js file
"use strict";

//=========================================================================================
//page content levels block (levels list)
const levelsList = document.querySelector('.levels__list');

const initLevelList = function () {
  let temp = ``;
  for (let i = 1; i < 22; i++) {
    temp += `<li class = "levels__item" data-index-number="${i}"> ${i} </li>`
  }
  return temp;
}

levelsList.innerHTML = initLevelList();
const arrayLevelsItem = document.querySelectorAll('.levels__item');

if (arrayLevelsItem) {
  for (let value of arrayLevelsItem) {
    value.addEventListener('click', function () {
      for (let value of arrayLevelsItem) {
        if (value.classList.contains('_active')) {
          value.classList.remove('_active');
        }
      }
      this.classList.toggle('_active');
      spaceTask.innerText = objectTaskText[this.dataset.indexNumber][0];
      spaceSolution.innerText = `${objectTaskText[this.dataset.indexNumber][1]}`;
      btnRun.addEventListener('click', () => {
        if (spaceTask.innerText !== sourceText[0]) {
          spaceResult.innerText = `${objectTaskText[this.dataset.indexNumber][1]()}`;
          if (spaceResult.innerText == `undefined`) {
            spaceResult.innerText = `solution in alert message or console. Press F12 to see console.`;
          }
        } else {
          spaceResult.innerText = sourceText[2];
        }
      }, { once: true });

    });
  }
}

const setTaskNumber = function (task) {
  spaceTask.innerHTML = objectTaskText.task.dataset.indexNumber;
}
//=========================================================================================
//source variables
const spaceTask = document.querySelector('.place__task');
const spaceSolution = document.querySelector('.place__solution');
const spaceResult = document.querySelector('.place__result');

const sourceText = ["Select the task number to view the text of the task and the solution", "here is solution", "here is result"];

const setSourceText = function () {
  spaceTask.innerText = sourceText[0];
  spaceSolution.innerText = sourceText[1];
  spaceResult.innerText = sourceText[2];
  for (let value of arrayLevelsItem) {
    if (value.classList.contains('_active')) {
      value.classList.remove('_active');
    }
  }
}

if (spaceTask) {
  setSourceText();
}
//=========================================================================================
//buttons RUn and Reset
const btnRun = document.querySelector('.btn__item_run');

const btnReset = document.querySelector('.btn__item_reset');
btnReset.addEventListener('click', setSourceText);
//=========================================================================================
const solutionTask1 = function () {
  const camelCase = 0;
  const snake_case = 1;
  const PascalCase = 2;

  alert('camelCase = ' + camelCase +
    '\nsnake_case = ' + snake_case +
    '\nPascalCase = ' + PascalCase);

  console.log('camelCase = ' + camelCase +
    '\nsnake_case = ' + snake_case +
    '\nPascalCase = ' + PascalCase);
}
//-----------------------------------------------------------------------------------------
const solutionTask2 = function () {
  const str = 'HTML';

  alert(str.toLocaleLowerCase());
}
//-----------------------------------------------------------------------------------------
const solutionTask3 = function () {
  let name = prompt('Enter Your name');

  alert(`Ваше Ім'я { ${name} }`);
}
//-----------------------------------------------------------------------------------------
const solutionTask4 = function () {
  const arrayFirst = ['Саша', 'Петя', 'Оксана'];

  //fisrt solution
  const getNonChangeArray = function (array) {
    array.reverse();
    array[1] = 'Олег';
    return array;
  };

  let result = `[${arrayFirst}] => [${getNonChangeArray(arrayFirst)}] => [${arrayFirst}]`;

  //second solution
  const arraySecond = ['Саша', 'Петя', 'Оксана'];

  const getChangeArray = function (array) {
    const newArray = array.slice(0).reverse();
    newArray[1] = 'Олег';
    return newArray;
  };

  return result + `\n[${arraySecond}] => [${getChangeArray(arraySecond)}] => [${arraySecond}]`;
}
//-----------------------------------------------------------------------------------------
const solutionTask5 = function () {
  const initNumber = function (num1, num2) {
    alert('Enter two unequal numbers in turn: ');
    do {
      num1 = +prompt('Enter your firts number here: ');
      num2 = +prompt('Enter your secont number here: ');
    } while (num1 === num2)
    return [num1, num2];
  };
  const ComparingNumbers = function (num1, num2) {
    return num1 > num2 ? num1 + num2 : num1 * num2;
  };
  let num1 = 0;
  let num2 = 0;
  [num1, num2] = initNumber(num1, num2);

  return `The result:
    First number: ${num1}
    Second number: ${num2}
    Result: ${ComparingNumbers(num1, num2)}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask6 = function () {
  const exampleArray = [10, 20, 30, 50, 235, 3000];

  const bringOutArray = (arr) => {
    let newArray = [];
    arr.forEach(el => {
      if (el.toString().startsWith('1') || el.toString().startsWith('2') || el.toString().startsWith('5')) newArray.push(el);
    })
    return newArray;
  }

  return `solutionTask6([${exampleArray}]) => [${bringOutArray(exampleArray)}]`;
}
//-----------------------------------------------------------------------------------------
const solutionTask7 = function () {
  let weight = new Number;
  let recommendation = new String();

  const getWeight = function () {
    weight = +prompt('Enter your weight: ');
    if (!(weight > 0)) getWeight();
    return weight;
  }

  const setRecommendation = function (w) {
    w < 4 ? recommendation = "Пора перекусити" :
      w <= 5.5 ? recommendation = 'Вага в нормі' :
        w > 5.5 ? recommendation = 'Пора на тренування' : alert('something went wrong. PLS re run task');
  }

  const dialog = function () {
    weight = getWeight()
    setRecommendation(weight);
    console.log(recommendation);
    return recommendation;
  }
  return `${dialog()}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask8 = function () {

  const getAnswers = function () {
    let a, b = 0;
    do {
      a = +prompt('Enter your exam score (from 0 to 100): ');
      b = +prompt('Enter your number of implemented projects (from 0 and above): ');
    } while (!((a >= 0 && a <= 100) && (b >= 0)))
    return [a, b];
  }

  const culcFinalGrace = function () {
    let [score, pj] = getAnswers();
    let grace = 0;
    if (score > 90 || pj > 10) grace = 100
    else if (score > 75 || pj >= 5) grace = 90
    else if (score > 50 || pj >= 2) grace = 75
    else grace = 0;
    return `Your the final Grase is: ${grace}`;
  }
  return `${culcFinalGrace()}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask9 = function () {
  const exampleArray = [1, 2, 3, 4];
  const getProduct = function (arr) {
    return arr.reduce((sum, count) => sum *= count);
  }

  return `Your mass is [${exampleArray}] => ${getProduct(exampleArray)}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask10 = function () {
  const exampleArray1 = ['Микита', 'Саша', 'Анастасія', 'Дима', 'Санич', 'Ольга',];
  const exampleArray2 = ['Олексій', 'Семен', 'Василиса', 'Діма', 'Максим', 'Ольга',];
  const exampleArray3 = ['Алішер', 'Ольга',];

  function removeIntersection(array) {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Микита'];
    return array.filter(x => !unwantedNames.includes(x));
  }

  function getMessage(array) {
    return `This is your array:\n[${array}]\nThis is your array after remove unwanted names:\n[${removeIntersection(array)}]`;
  }

  return `${getMessage(exampleArray1)}\n\n${getMessage(exampleArray2)}\n\n${getMessage(exampleArray3)}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask11 = function () {
  const newCalc = (arr1, arr2) => { return (arr1.reduce((sum, curent) => sum *= curent)) - (arr2.reduce((sum, curent) => sum *= curent)) };

  const getMessage = function (arr1, arr2) {
    let result = newCalc(arr1, arr2);
    return `example([${arr1}], [${arr2}]) => ${result}`;
  }
  return `The result:
  ${getMessage([3, 2, 5], [1, 4, 4])};
  ${getMessage([9, 7, 2], [5, 2, 2])};
  ${getMessage([11, 2, 5], [1, 10, 8])};
  ${getMessage([4, 4, 7], [3, 9, 3])};
  ${getMessage([15, 20, 25], [10, 30, 25])};`
}
//-----------------------------------------------------------------------------------------
const solutionTask12 = function () {
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
    return `This is the range of numbers between your numbers: \n[${array}]`;
  }

  return `${getMessage()}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask13 = function () {
  const getMessage = function (str) {
    const number = parseInt(str, 16);
    return `hexToDec('${str}') => ${number}`;
  }

  return `The result: 
  ${getMessage('1')}
  ${getMessage('a')}
  ${getMessage('10')}
  ${getMessage('FF')}
  ${getMessage('-C')}`
}
//-----------------------------------------------------------------------------------------
const solutionTask14 = function () {
  const remove = function (str, base) {
    if (base != 0 || base != undefined) {
      for (let i = 0; i < base; i++) {
        str = str.replace('!', "");
      }
    }
    return str;
  }
  return `The result:
  remove("Hi!", 1) => "${remove("Hi!", 1)}"
  remove("Hi!", 100) => "${remove("Hi!", 100)}"
  remove("Hi!!!", 1) => "${remove("Hi!!!", 1)}"
  remove("Hi!!!", 100) => "${remove("Hi!!!", 100)}"
  remove("!Hi", 1) => "${remove("!Hi", 1)}"
  remove("!Hi!", 1) => "${remove("!Hi!", 1)}"
  remove("!Hi!", 100) => "${remove("!Hi!", 100)}"
  remove("!!!Hi !!hi!!! !hi", 1) => "${remove("!!!Hi !!hi!!! !hi", 1)}"
  remove("!!!Hi !!hi!!! !hi", 3) => "${remove("!!!Hi !!hi!!! !hi", 3)}"
  remove("!!!Hi !!hi!!! !hi", 5) => "${remove("!!!Hi !!hi!!! !hi", 5)}"
  remove("!!!Hi !!hi!!! !hi", 100) => "${remove("!!!Hi !!hi!!! !hi", 100)}"`;
}
//-----------------------------------------------------------------------------------------
const solutionTask15 = function () {
  const getArray = function () {
    let ex = new String();
    do {
      ex = prompt(`Enter your array with spaces between numbers: `);
      ex = ex.split(' ');
    } while (ex.length < 0)
    return ex;
  }

  const sortArray = function (arr) {
    return arr.sort(function (a, b) { return a - b });
  }

  const maxDiff = function (arr) {
    if (arr.length > 0) {
      return (arr[arr.length - 1] - arr[0]);
    }
    else {
      return 0;
    }
  }

  const getMessage = function () {
    if (confirm('If iu want enter our array press "OK" or to everything ready-made arrays click "Cancel"')) {
      const array = getArray();
      const staticArray = array.slice(0);
      return `maxDiff([${staticArray}]) => ${maxDiff(array.sort(function (a, b) { return a - b }))}`;
    } else {
      const exArray1 = [0, 1, 2, 3, 4, 5, 6];
      const exArray2 = [-0, 1, 2, -3, 4, 5, -6];
      const exArray3 = [0, 1, 2, 3, 4, 5, 16];
      const exArray4 = [16];
      const exArray5 = [];
      return `The result: 
      maxDiff([${exArray1}]) => ${maxDiff(sortArray(exArray1))};
      maxDiff([${exArray2}]) => ${maxDiff(sortArray(exArray2))};
      maxDiff([${exArray3}]) => ${maxDiff(sortArray(exArray3))};
      maxDiff([${exArray4}]) => ${maxDiff(sortArray(exArray4))};
      maxDiff([${exArray5}]) => ${maxDiff(sortArray(exArray5))};`;
    }
  }
  return getMessage();
}
//-----------------------------------------------------------------------------------------
const solutionTask16 = function () {
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
    let array = arr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return array.split(' ').filter((el) => el.length > num);
  }
  const getMessage = function () {
    const [sentences, lenght] = getArguments();
    return `example('${sentences}', ${lenght}) => [${filterArray(sentences, lenght)}]`;
  }
  return `The result: 
  ${getMessage()}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask17 = function () {
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
    return `divisibleByThree('${example}') => ${answer}`;
  }
  return `The result:
  ${getMesseger()};
  ${getMesseger()};
  ${getMesseger()};
  ${getMesseger()}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask18 = function () {
  function spacey(list) {
    return list.reduce((acc, current) => [...acc, acc.slice(-1) + current], [])
  }

  return `The result:
  spacey(['kevin', 'has', 'no', 'space']) =>
  ${spacey(['kevin', 'has', 'no', 'space'])} ;
  spacey(['this', 'cheese', 'has', 'no', 'holes']) =>
  ${spacey(['this', 'cheese', 'has', 'no', 'holes'])}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask19 = function () {
  const evensAndOdds = function (num) {
    if (num % 2 == 0) {
      return +((num).toString(2));
    } else {
      return (num).toString(16);
    }
  }
  return `The result
  evensAndOdds(2) => ${evensAndOdds(2)}
  evensAndOdds(13) => ${evensAndOdds(13)}`;
}
//-----------------------------------------------------------------------------------------
const solutionTask20 = function () {
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
}
//-----------------------------------------------------------------------------------------
const solutionTask21 = function () {
  const switcheroo = function (str) {
    return str.replace(/(a)|b/g, (_, a) => a ? "b" : "a")
  }
  return `The result
  switcheroo('abc') => ${switcheroo('abc')}
  switcheroo('aaabcccbaaa') => ${switcheroo('aaabcccbaaa')}
  switcheroo('ccccc') => ${switcheroo('ccccc')}
  switcheroo('acb') => ${switcheroo('acb')}
  switcheroo('aabacbaa') => ${switcheroo('aabacbaa')}`;
}

//=========================================================================================
//object with task text and solution function
const objectTaskText = {
  1: [`Практика JS 1.

Створіть змінну за допомогою camelCase, snake_case та PascalCase і надайте їм значення від 0 до 2-х.
Виведіть значення цих змінних на екран за допомогою методу alert та console.log. 
Скажіть, чим кардинально відрізняється alert та console.log?`, solutionTask1],
  2: [`Практика JS 2.

Дано рядок str = 'HTML'. Застосуйте до неї певний метод рядків, щоб усі літери стали короткими. 
Виведіть результат у консоль.
Якщо є труднощі, подивіться, що таке методи рядків.`, solutionTask2],
  3: [`Практика JS 3.

Запитайте ім'я користувача за допомогою методу prompt. 
Виведіть за допомогою alert повідомлення 'Ваше ім'я {ім'я}'.`, solutionTask3],
  4: [`Практика JS 4.

Даний масив ['Саша', 'Петя', 'Оксана'], зробіть із нього ['Оксанa', 'Олег', 'Саша'].
Реалізуйте це завдання двома способами.
У першому вихідний масив має бути змінений, у другому - не може бути змінений.`, solutionTask4],
  5: [`Практика JS 5.

Напишіть скрипт, який приймає з клавіатури 2 числа, 
і якщо перше більше за друге, то виводить на екран їх суму, 
якщо ж навпаки - добуток. Якщо числа однакові, виводить на екран цифри однакові.`, solutionTask5],
  6: [`Практика JS 6.

Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000]. 
Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5.`, solutionTask6],
  7: [`Практика JS 7.

Вага записана у змінну weight. Рекомендацію записуй рядком у змінну recommendation. 
Якщо вага до 4 кг (не включаючи це значення), рекомендація – "Пора перекусити". 
Якщо вага від 4 кг включно до 5.5 кг включно - 'Вага в нормі'.
Якщо вага більше 5.5 кг - 'Пора на тренування'. 
Як умови, використовуй значення weight 1, 3, 4, 5, 10. 
Рекомендацію виводь у консоль.`, solutionTask7],
  8: [`Практика JS 8.

Напишіть функцію, яка обчислює підсумкову оцінку студента в залежності від двох параметрів:
оцінки за іспит та кількість виконаних проектів. Ваша функція повинна приймати два аргументи: 
іспит – оцінка за іспит (від 0 до 100);
проекти – кількість реалізованих проектів (від 0 і вище); 
Ця функція має повертати число (підсумкова оцінка). 
Є чотири типи підсумкових оцінок:

100, якщо оцінка за іспит більша за 90 або кількість виконаних проектів більша за 10.
90, якщо оцінка за іспит більша за 75 або кількість виконаних проектів не менше ніж 5.
75, якщо оцінка за іспит більше 50 або кількість виконаних проектів не менше ніж 2.
0, в інших випадках`, solutionTask8],
  9: [`Практика JS 9.

Напишіть функцію, яка приймає масив, а повертає добуток елементів масиву, помножених по порядку один на одного.

Приклад коду:
example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24`, solutionTask9],
  10: [`Практика JS 10.

Напишіть функцію, яка прийматиме масив з іменами, і повертатиме масив, 
але вже з віддаленими небажаними іменами. Масив із небажаними іменами має бути
всередині вашої функції: 
const unwantedNames = [“Дима”, “Саша”, ”Ольга”, ”Микита”].

Приклад коду:
  example(['Микита', 'Саша', 'Анастасія', 'Дима', 'Санич', 'Ольга', ]) => [Анастасія','Санич']
  example(['Олексій', 'Семен', 'Василиса', 'Діма', 'Максим', 'Ольга', ]) => ['Олексій','Семен','Василиса','Максим']
  example(['Алішер', 'Ольга', ]) => ['Алішер']`, solutionTask10],
  11: [`Практика JS 11.

У цій вправі повинні написати програму, яка прийматиме як параметри два масиви цілих чисел.
Необхідно знайти добуток кожного масиву, після чого знайти різницю двох масивів, 
незалежно від того, який з них більше. Якщо напишіть рішення в один рядок, будете молодці.

Приклад коду:
example([3, 2, 5], [1, 4, 4]) => 14
example([9, 7, 2], [5, 2, 2]) => 106
example([11, 2, 5], [1, 10, 8]) => 30
example([4, 4, 7], [3, 9, 3]) => 31
example([15, 20, 25], [10, 30, 25]) => 0`, solutionTask11],
  12: [`Практика JS 12.

Завершіть функцію, яка приймає два цілих числа ( a, b, де a <  b)
і повертає масив усіх цілих чисел між вхідними параметрами, включаючи їх.

Приклад коду:
between(1, 4) => [1, 2, 3, 4]
between(-2, 2) => [-2, -1, 0, 1, 2]
between(20, 25) => [20, 21, 22, 23, 24, 25]`, solutionTask12],
  13: [`Практика JS 13.

Напишіть функцію, яка перетворює шістнадцяткове число (задане у вигляді рядка) 
на десяткове число.

Приклад коду:
hexToDec('1') => 1
hexToDec('a') => 10
hexToDec('10') => 16
hexToDec('FF') => 255
hexToDec('-C') => 12`, solutionTask13],
  14: [`Практика JS 14.

Видаліть n знаків оклику в пропозиції зліва направо. n – позитивне ціле число.

Приклад коду:
  remove("Hi!",1) => "Hi"
  remove("Hi!",100) => "Hi"
  remove("Hi!!!",1) => "Hi!!"
  remove("Hi!!!",100) => "Hi"
  remove("!Hi",1) => "Hi"
  remove("!Hi!",1) => "Hi!"
  remove("!Hi!",100) => "Hi"
  remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
  remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"`, solutionTask14],
  15: [`Практика JS 15.

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
maxDiff([]) => 0`, solutionTask15],
  16: [`Практика JS 16.

Напишіть функцію, яка приймає рядок і число. 
Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.

Приклад коду:
example('Сьогодні чудовий день. З самого ранку ми підемо на озеро, купатися.', 5) => ['Сьогодні', 'чудовий', 'самого', 'підемо', 'купатися']
example('Над містом хмари, коридори, береги, проспект, річка.', 7) => ['коридори', 'проспект']`, solutionTask16],
  17: [`Практика JS 17.

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
divisibleByThree('1') => false`, solutionTask17],
  18: [`Практика JS 18.

Жодних розмов. Жодних пояснень. Тільки ТЗ та результат, який має бути. Подивіться, що має вийти на виході і напишіть цю функцію.

Приклад коду:
spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']`, solutionTask18],
  19: [`Практика JS 19.

Якщо число парне, перетворіть його на двійкове. '
Якщо число непарне, перетворіть його на шістнадцяткове.

Приклад коду:
evensAndOdds(2) => '10'
evensAndOdds(13) => 'd'`, solutionTask19],
  20: [`Практика JS 20.

Необхідно реалізувати функцію, яка на вході приймає масив з різними 
типами даних = ['a', 1, 2, false, 'b'], а повертає об'єкт, 
у якому ці типи даних розсортовані за ключами.

Приклад коду:
{
   number: [1, 2],
   string: ['a', 'b'],
   boolean: [false]
}`, solutionTask20],
  21: [`Практика JS 21.

Дано рядок, що складається з букв a, b, c. Ваше завдання змінити розташування літер a та b, але не чіпати c.

Приклад коду:
switcheroo('abc') =>'bac'
switcheroo('aaabcccbaaa') =>'bbbacccabbb'
switcheroo('ccccc') =>'ccccc'
switcheroo('acb') =>'bca'
switcheroo('aabacbaa') =>'bbabcabb'`, solutionTask21],
};