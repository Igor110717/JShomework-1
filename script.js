// //Задание 2

// const total = 50;

// const ordered  = 54;

// const res = ordered < total && ordered > 0 ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно твоаров!";

// console.log (res);

//Задание 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let requestPassword = prompt("Введние пароль!");
// if ( requestPassword === null) {
//   message = 'Отменено пользователем!';
// }
// else if (requestPassword === ADMIN_PASSWORD) {

// message = 'Добро пожаловать!';
// }
// else {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// alert (message);

// Задание 4

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = 0;
// let droidСount;
// let inputrequest = prompt ( 'Введите кличество дроидов');
// if (inputrequest === null) {
//     console.log ('Отменено пользователем!');
// }
// else {
//    droidСount = Number (inputrequest);
//    totalPrice = pricePerDroid * droidСount

//  if (totalPrice > credits) {
//     console.log ('Недостаточно средств на счету!')
//  }
//  else {
//     console.log (`'Вы купили ${droidСount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
//  }
// }

// Задание 5

// let numberLoans;
// let specifyСountry = prompt('Укажите страну');
// specifyСountry = specifyСountry.toLowerCase();
// let countryFound = true;

// switch (specifyСountry) {
//   case 'китай':
//     numberLoans = 100;
//     break;
//   case 'чили':
//     numberLoans = 250;
//     break;
//   case 'австралия':
//     numberLoans = 170;
//     break;
//   case 'индия':
//     numberLoans = 80;
//     break;
//   case 'ямайка':
//     numberLoans = 120;
//     break;
//   default:
//     countryFound = false;
//     alert('В вашей стране доставка не доступна');
// }
// if (countryFound === true) {
//   console.log(
//     `Доставка в ${specifyСountry} будет стоить ${numberLoans} кредитов`,
//   );
// }

// Задание 6

// let total = 0;
// let input;

// while (true) {
//   input = prompt("Укажите число");

//   // Проверяем, нажал ли пользователь Cancel (input будет равно null)
//   if (input === null) {
//     break;
//   }

//   // Конвертируем ввод в число
//   let inputNumber = Number(input);

//   // Проверяем, является ли введенное значение числом
//   if (Number.isNaN(inputNumber)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     total += inputNumber;
//   }
// }

// // Показываем общую сумму чисел
// alert(`Общая сумма чисел равна ${total}`);


// // Задание 1 (повтор)

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, Цена за штуку: ${price}`);
// price = 2000;
// console.log(`Выбран ${name}, Цена за штуку: ${price}`);


// Задание 2 (повтор)

// const total = 100;
// const ordered = 50;

// if (ordered > total) {
//     console.log("На складе недостаточно твоаров!")
// }
// else {
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// }

// Или
// const res = ordered < total && ordered > 0 ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно твоаров!";

// console.log(res);

// Задание 3 (повтор)

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let requestPassword = prompt("Введние пароль!");

// if (requestPassword ===null) {
//     message = 'Отменено пользователем!';
// }
// else if (requestPassword === ADMIN_PASSWORD) (
//     message = 'Добро пожаловать!'
// )

// else {
//     message = 'Доступ запрещен, неверный пароль!'
// }

// alert (message);

// Задание 4 (повтор)

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = 0;
// let droidСount;
// let inputrequest = prompt ( 'Введите кличество дроидов');

// if (inputrequest === null) {
//     console.log('Отменено пользователем!')
// }
// else {
//     droidСount = Number (inputrequest);
//        totalPrice = pricePerDroid * droidСount

//        if (totalPrice > credits) {
//         console.log ('Недостаточно средств на счету!')
//        }
//        else {
//         credits -= totalPrice 
//        console.log (`'Вы купили ${droidСount} дроидов, на счету осталось ${credits} кредитов.`)
//        }
//     }

// Задание 5 (повтор)

// let numberLoans;
// let specifyСountry = prompt('Укажите страну');



// if (specifyСountry === null) {
//     alert('Вы отменили заявку!');
// }

// else {
//     specifyСountry = specifyСountry.toLowerCase();
//     let countryFound = true;

// switch (specifyСountry) {
//     case 'китай': 
//     numberLoans = 100;
//     break;
//     case 'чили': 
//     numberLoans = 250;
//     break;
//     case 'австралия': 
//     numberLoans = 170;
//     break;
//     case 'индия': 
//     numberLoans = 80;
//     break;
//     case 'ямайка': 
//     numberLoans = 120;
//     break;
//     default:
//         countryFound = false; 
//     alert ('В вашей стране доставка не доступна');
// }

// if (countryFound === true) {
//     console.log(`Доставка в ${specifyСountry} будет стоить ${numberLoans} кредитов`);
// }
// }

// задание 6 (повтор)

let input;
let total = 0;

