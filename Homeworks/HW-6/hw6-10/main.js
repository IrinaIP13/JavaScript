// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const array = [];
for (let i = 6; i <= 10; i++) {
    array.push({value:`${i}`})
}
array.push({value:'ace'})
array.push({value:'jack'})
array.push({value:'queen'})
array.push({value:'king'})

let cards = create('spade', 'black');
cards = cards.concat(create('diamond', 'red'), create('heart', 'red'), create('clubs', 'black'));


function create(suit, color) {
   return array.map(item => ({...item, cardSuit:`${suit}`, color: `${color}`}));
}
console.log(cards);

// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
console.log(cards.filter(item => item.value.includes('ace'))
    .filter(item => item.cardSuit.includes('spade')));
//
//  – всі шістки
console.log(cards.filter(item => item.value.includes('6')));
//
//  – всі червоні карти
console.log(cards.filter(item => item.color.includes('red')));
//
//  – всі буби
console.log(cards.filter(item => item.cardSuit.includes('diamond')));
//
//  – всі трефи від 9 та більше
console.log(cards.filter(item => item.value !== '6'&&item.value !== '7'&&item.value !== '8'&&item.cardSuit.includes('clubs')));