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

// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’>, в якому буде <h1 class=’heading’>
// з title елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

const body = document.querySelector('body');

for (const element of coursesAndDurationArray) {
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = element.title;

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = element.monthDuration;

    const div = document.createElement('div')
    div.classList.add('item');
    div.append(h1, p);
    body.appendChild(div);
}