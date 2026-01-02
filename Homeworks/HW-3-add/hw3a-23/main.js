// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let arrayString = [ 'a', 'b', 'c'];

let word = '';
for (let i = 0; i < arrayString.length; i++) {
    word = word + arrayString[i];
}
console.log(word);
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let word2 = '';
let i = 0;
while (i < word.length) {
    word2 = word2 + arrayString[i];
    i++;
}
console.log(word2);
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';
for (const word3Element of arrayString) {
    word3 = word3 + word3Element;
}
console.log(word3);
