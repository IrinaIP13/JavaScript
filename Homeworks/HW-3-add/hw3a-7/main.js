// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array = [465, 'banana', true, 0, null, 845, -37, 'lemon', 'pear', false];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'boolean') {
        console.log(array[i]);
    }
}