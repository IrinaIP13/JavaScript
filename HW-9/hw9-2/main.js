// #OPLI89c9G
//
// – Є масив:
//
 const arrayNav = ['Main','Products','About us','Contacts'];
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul = document.createElement('ul');

for (const element of arrayNav) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

const body = document.querySelector('body').appendChild(ul);