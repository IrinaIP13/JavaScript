// #4WrHwFTEop0
// є масив
let users = [
    {name: 'Vasya', age: 31, status: false},
    {name: 'Petya', age: 30, status: true},
    {name: 'Kolya', age: 29, status: true},
    {name: 'Olya', age: 28, status: false},
    {name: 'Max', age: 30, status: true},
    {name: 'Anya', age: 31, status: false},
    {name: 'Oleg', age: 28, status: false},
    {name: 'Andrey', age: 29, status: true},
    {name: 'Masha', age: 30, status: true},
    {name: 'Olya', age: 31, status: false},
    {name: 'Max', age: 31, status: true}
];
//
// за допомогою циклу вивести
// – користувачів зі статусом true
// – користувачів зі статусом false
// – користувачів, які старші за 30 років


console.log('Користувачі зі статусом true:')
for (const usersKey in users) {
    let user = users[usersKey];
    if (user.status) console.log(user.name)
}
console.log('Користувачі зі статусом false:')
for (const usersKey in users) {
    let user = users[usersKey];
    if (!user.status) console.log(user.name)
}
console.log('Користувачі, які старші за 30 років:')
for (const usersKey in users) {
    let user = users[usersKey];
    if (user.age>30) console.log(user.name + ' (' + user.age + 'р)')
}