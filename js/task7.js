//main js file
"use strict";

//=========================================================================================
/*
Практика JS 7.
Вага записана у змінну weight. Рекомендацію записуй рядком у змінну recommendation. 
Якщо вага до 4 кг (не включаючи це значення), рекомендація – "Пора перекусити". 
Якщо вага від 4 кг включно до 5.5 кг включно - 'Вага в нормі'.
Якщо вага більше 5.5 кг - 'Пора на тренування'. 
Як умови, використовуй значення weight 1, 3, 4, 5, 10. 
Рекомендацію виводь у консоль.
*/
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
      w > 5.5 ? recommendation = 'Пора на тренування' : alert('something went wrong. PLS reload site');
}

const dialog = function () {
  weight = getWeight()
  setRecommendation(weight);
  console.log(recommendation);
}

dialog();

