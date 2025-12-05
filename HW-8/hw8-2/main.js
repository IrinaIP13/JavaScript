// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    greening() {
        console.log('shalom')
    },
    goodbye(){
        console.log('bye')
    }
}

function deepClone(object) {
    if(object) {

        let clonedObj = JSON.parse(JSON.stringify(object));

        for (const objectKey in object) {
            if (typeof object[objectKey] === "function") {
                clonedObj[objectKey] = object[objectKey];
            }
        }

        return clonedObj;
    }
    throw new Error('Not implemented');
}

let cloneUser= deepClone(user);
console.log(cloneUser);