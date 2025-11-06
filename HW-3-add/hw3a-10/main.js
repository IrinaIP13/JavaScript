// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let arrayNew = [];

arrayNew[0] = 0;
arrayNew[1] = undefined;
arrayNew[2] = 'apple';
arrayNew[3] = false;
arrayNew[4] = 703;
arrayNew[5] = 'melon';
arrayNew[6] = -73;
arrayNew[7] = 'november';
arrayNew[8] = null;
arrayNew[9] = 586;

for (let i = 0; i < arrayNew.length; i++) {
    console.log(arrayNew[i]);
}
