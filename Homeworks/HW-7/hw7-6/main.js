// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, maker, age, speedMax, engineVolume) {
    this.model = model;
    this.maker = maker;
    this.age = age;
    this.speedMax = speedMax;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speedMax} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speedMax = this.speedMax + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.age = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car = new Car('Camry', 'Tayota', 2022, 180, 2.5);
car.increaseMaxSpeed(60);
car.changeYear(2024);
car.addDriver('Igor');
car.drive();
car.info();