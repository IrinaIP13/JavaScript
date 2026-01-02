// #jeBqHV525U5
//
// – Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

const body = document.querySelector('body');

for (const element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.textContent = `Course "${element.title}" - duration ${element.monthDuration} months`;
    body.appendChild(div);
}