// #qLQLJSeN7i
//
// – є масив
//
let array = [2,17,13,6,22,31,45,66,100,-18];
//
// 1. перебрати його циклом while
let index = 0;
while (index < array.length) {
    index++;
}
//
// 2. перебрати його циклом for
for (let i = 0; i < array.length; i++) {
}
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
index = 0;
while (index < array.length) {
    if (index % 2 !== 0) console.log(array[index]);
    index++;
}
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) console.log(array[i]);
}
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
index = 0;
while (index < array.length) {
    if (array[index] % 2 === 0) console.log(array[index]);
    index++;
}
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) console.log(array[i]);
}
//
// 7. замінити кожне число, кратне 3, на слово “okten”
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) array[i] = 'okten';
}
console.log(array);
//
// 8. вивести масив у зворотньому порядку.
let arrStr = '';
for (let i = array.length-1; i >= 0; i--) {
    arrStr += `${array[i]}, `;
}
console.log(arrStr);
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
array = [2,17,13,6,22,31,45,66,100,-18];
//
// - перебрати його циклом while (у зворотньому порядку)
index = array.length-1;
while (index >=0 ) {
    index--;
}
//
// - перебрати його циклом for (у зворотньому циклі)
for (let i = array.length-1; i >= 0; i--) {
}
//
// - перебрати циклом while та вивести  числа тільки з непарним індексом (у зворотньому циклі)
index = array.length-1;
while (index >= 0) {
    if (index % 2 !== 0) console.log(array[index]);
    index--;
}
//
// - перебрати циклом for та вивести  числа тільки з непарним індексом (у зворотньому циклі)
for (let i = array.length-1; i >= 0; i--) {
    if (i % 2 !== 0) console.log(array[i]);
}
//
// - перебрати циклом while та вивести  числа тільки парні  значення (у зворотньому циклі)
index = array.length-1;
while (index >= 0) {
    if (array[index] % 2 === 0) console.log(array[index]);
    index--;
}
//
// - перебрати циклом for та вивести  числа тільки парні  значення (у зворотньому циклі)
for (let i = array.length-1; i >= 0; i--) {
    if (array[i] % 2 === 0) console.log(array[i]);
}
//
// - замінити кожне число, кратне 3, на слово “okten” (у зворотньому циклі)
for (let i = array.length-1; i >= 0; i--) {
    if (array[i] % 3 === 0) array[i] = 'okten';
    console.log(array[i]);
}
