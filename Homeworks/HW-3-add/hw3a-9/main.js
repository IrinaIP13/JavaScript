// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array = [465, 'banana', true, 0, null, 845, -37, 'lemon', 'pear', false];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
        console.log(array[i]);
    }
}

