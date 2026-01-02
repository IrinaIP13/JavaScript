// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
let array = [4,6,2,8,5,9,11];

Array.prototype.myForeach = function (callback) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
array.myForeach(item => console.log(item));

Array.prototype.myFilter = function (predicate) {
    let array = this;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(array.myFilter(argument => argument>5));