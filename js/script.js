// Мінімум

// Напиши всі можливі варіанти створення функцій.

// function name(a, b) {
//     return a + b;
// }

// let name = function(a, b) {
//     console.log(a + b);
// }

// let name = (a, b) => a + b;


// Створи функцію, яка буде виводити кількість
// переданих їй аргументів.

// function quantity() {
//     for(i = 0; i < arguments.length; i++) {}
//     return arguments.length;
// }

// console.log(quantity(1, 2, 3, 4, 8, 9));



// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// function returnNum (a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     }
// }

// console.log(returnNum(3, 3));


// Напиши функцію, яка обчислює факторіал
//  переданого їй числа.


// function factorial (number) {
//     if (number < 0) {
//         return -1;
//     } else if (number == 0) {
//         return 1;
//     } else {
//         return (number * factorial(number - 1));
//     }
// }

// console.log(factorial(5));


// Напиши функцію, яка приймає три окремі цифри
//  і перетворює їх в одне число. Наприклад:
//  цифри 1, 4, 9 перетворяться в число 149.


// function transNumber (a, b, c) {
//     let sum = `${a}${b}${c}`;
//     return Number(sum);
// }
// console.log(transNumber(8, 5, 4));




// Напиши функцію, яка приймає довжину і ширину
// прямокутника і обчислює його площу. Якщо в функцію
// передали 1 параметр, то вона обчислює площу квадрата.

// function areaRect (length, width) {
//     if (length == 0 || width == 0) {
//         return "Невірні дані"
//     } else if (length && width) {
//         area = length * width;
//         return area;
//     } else if (length || width) {
//         square = length * 2 || width * 2;
//         return square;
//     } else {
//         return "Немає данних";
//     }
// }

// console.log(areaRect(7, 7));




// Норма

// // Напиши функцію, яка перевіряє, чи є передане їй 
// число “досконалим числом”. Досконале число - це число,
// яке дорівнює сумі всіх своїх дільників.

// function perfectNum(number) {
//     sum = 0;
//     for (i = 1; i <= number / 2; i++) 
//     { 
//         if (number % i === 0) 
//         {
//             sum += i;   
//         }
        
//     }
//     if (sum === number && sum !== 0)
//     {
//         console.log(`Це досконале число.`);
//     } 
//     else console.log(`Це не досконале число.`);
// }

// perfectNum(6);




// Напиши функцію, яка приймає мінімальне і
// максимальне значення для діапазону, і
// виводить тільки ті числа з діапазону,
// які є досконалими. Використовуй написану
// раніше функцію, щоб дізнатися, чи є це число
// досконалим.

