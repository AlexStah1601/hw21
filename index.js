'use strict';


//Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
console.log( arr );




// Сортировать в обратном порядке
const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);


// Сортировать 
const arr_1 = [5, 2, 1, -10, 8];
arr_1.sort((a, b) => a - b);
console.log(arr_1);


// Скопировать и отсортировать массив
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log( sorted );
// console.log( arr );


// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
console.log( names );


//find и findIndex
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName ); 




// Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log( fruits.length );


// Операции с массивами
let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

// Math.floor((styles.length - 1) / 2)] = "Классика";
styles.splice(1,1,"Классика");
console.log(styles);

 styles.shift();
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);



//Сумма пользовательских чисел
// let x = +prompt("Введите первое число", "");
// let y = +prompt("Введите второе число", "");

// alert( x + y );



//Переведите текст вида border-left-width в borderLeftWidth

const camelize = (str) => {
  const arr = str.split ("-");
  let arr2 = arr.filter ((word) => word !== "");
  let arr3 = arr2.map((item, i) =>{
    let joinedWord;
    if (i == 0){
      joinedWord = item;
    }
    let letterArray = item.split ("");
    letterArray[0] = letterArray[0].toUpperCase();
    joinedWord =letterArray.join("");

    return joinedWord;
  });
  return arr3.join("");
};
camelize("-webkit-transition") == 'WebkitTransition';
let allIt = camelize(str);
console.log (allIt);