// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForeach = function (collback) {
    let arguments = this;
    for (const argument of arguments) {
        collback(argument);
    }
}

let array = [4,6,2,8,5,9,11];
array.myForeach(argument => console.log(argument));

Array.prototype.myFilter = function (collback) {
    let arguments = this;
    let newArray = [];
    for (const argument of arguments) {
        if (collback(argument)) {
            newArray.push(argument);
        }
    }
    return newArray;
}
console.log(array.myFilter(argument => argument>5));