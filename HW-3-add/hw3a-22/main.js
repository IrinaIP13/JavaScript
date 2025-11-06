// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrayNumber = [1, -48, 845, -37, 134, -586, 33, 374, 474, -4];
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0) {
        console.log(arrayNumber[i]);
    }
}
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrayNew = [];
for (let i = 0; i < arrayNumber.length; i++) {
    arrayNew.push(arrayNumber[i]);
}
console.log(arrayNew);
