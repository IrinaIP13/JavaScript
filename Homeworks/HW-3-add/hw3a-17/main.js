// 1. Створити пустий масив та :
    let arrayGlobal = [];
//
//     a. заповнити його 50 парними числами за допомоги циклу.
    let evenNumber = 2;
    for (let i = 0; i < 50; i++) {
    arrayGlobal[i] = evenNumber;
        evenNumber+=2;
    }
    console.log(arrayGlobal);
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumber = 1;
for (let i = 0; i < 50; i++) {
    arrayGlobal[i] = oddNumber;
    oddNumber+=2;
}
console.log(arrayGlobal);
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
arrayGlobal = [];
for (let i = 0; i < 20; i++) {
    arrayGlobal[i] = Math.random().toFixed(2)*100;
}
console.log(arrayGlobal);
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arrayGlobal[i] = getRandomInt(8, 738);
}
function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayGlobal);
//
// 2. Вивести за допомогою console.log кожен третій елемент
for (let i = 0; i < arrayGlobal.length; i+=2) {
    console.log(arrayGlobal[i]);
}
//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 0; i < arrayGlobal.length; i+=2) {
    if (arrayGlobal[i] % 2 === 0) {
        console.log(arrayGlobal[i]);
    }
}
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let arrayNew = [];
let j = 0;
for (let i = 0; i < arrayGlobal.length; i+=2) {
    if (arrayGlobal[i] % 2 === 0) {
        arrayNew[j] = arrayGlobal[i];
        j++;
    }
}
console.log(arrayNew);
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arrayGlobal.length; i++) {
    if (arrayGlobal[i+1] % 2 === 0) {
        console.log(arrayGlobal[i]);
    }
}



    