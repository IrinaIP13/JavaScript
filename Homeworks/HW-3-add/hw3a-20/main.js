//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let array = [7, 'apple', 75, false, 666, 'banana', 83, 0, true, 'malon', 453, 4, 91];
let arrayNew = [];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        arrayNew.push(array[i]);
    }
}
console.log(arrayNew);