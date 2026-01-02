// #yo06d74c1C
//
// – є масив
//

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

 // — відсортувати його за спаданням за monthDuration
const sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sort);

// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const map = filter.map((value, index) => ({id:index+1,...value}))
console.log(map)
