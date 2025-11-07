// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sum([6, 4, 7, 3 ,9]))