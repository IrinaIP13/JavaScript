// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const arrayCinderellas = [
    new Cinderella('Irina', 33, 37),
    new Cinderella('Katerina', 23, 38),
    new Cinderella('Svetlana', 50, 41),
    new Cinderella('Anastasia', 21, 36),
    new Cinderella('Oksana', 9, 33),
    new Cinderella('Olga', 36, 39),
    new Cinderella('Elena', 40, 36),
    new Cinderella('Anna', 39, 40),
    new Cinderella('Tatiana', 60, 38),
    new Cinderella('Evgenia', 17, 36)
]

class Prince extends Cinderella {
    constructor(name, age, slipperSize) {
        super(name, age);
        this.slipperSize = slipperSize;
    }
}

const prince = new Prince('Igor', 37, 37);

for (const cinderella of arrayCinderellas) {
    if (prince.slipperSize === cinderella.footSize) {
        console.log(`${prince.name} found his сinderella ${cinderella.name}`);
    }
}

console.log(arrayCinderellas.find(cinderella => cinderella.footSize === prince.slipperSize ));

