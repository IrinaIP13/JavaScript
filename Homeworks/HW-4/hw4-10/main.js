// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

function minNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
}

console.log(minNumber([86, 9, 156, 0, 32, -4, 387]));