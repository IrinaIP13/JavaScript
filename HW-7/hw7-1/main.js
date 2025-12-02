// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User (id, name, surname , email, phone)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


const users = [
    new User(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388'),
    new User(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422'),
    new User(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233'),
    new User(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477'),
    new User(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400'),
    new User(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633'),
    new User(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433'),
    new User(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411'),
    new User(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455'),
    new User(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499'),
]

console.log(users);


