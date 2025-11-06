//
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let array = [];
let arrayNew = []
for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random()*100);
    arrayNew[i] = array[i]*5;
}
console.log(array, arrayNew);