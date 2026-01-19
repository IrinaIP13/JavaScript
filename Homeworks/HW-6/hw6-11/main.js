// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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


let objRes = cards.reduce((acc, cur) => {
    console.log(cur)
    switch (cur.cardSuit){
        case 'spade':
            acc.spades.push(cur);
            break;
        case 'diamond':
            acc.diamonds.push(cur);
            break;
        case 'heart':
            acc.hearts.push(cur);
            break;
        case 'clubs':
            acc.clubs.push(cur);
            break;
    }
    return acc;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(objRes);

