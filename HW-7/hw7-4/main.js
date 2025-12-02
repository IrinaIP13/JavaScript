// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client (id, name, surname , email, phone, products)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}


const users = [
    new Client(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388', ['phone','watch', 'tv', 'headphones']),
    new Client(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422', ['laptop', 'tablet', 'watch', 'tv', 'headphones']),
    new Client(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477', ['tv', 'phone']),
    new Client(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400', ['laptop']),
    new Client(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433', ['tablet', 'tv', 'headphones']),
    new Client(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411', ['computer', 'monitor', 'watch', 'tv', 'headphones']),
    new Client(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455', ['tablet', 'tv', 'headphones', 'phone','laptop']),
    new Client(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499', ['phone', 'headphones']),
]

console.log(users);


