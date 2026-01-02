// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const form = document.querySelector('form');
const button = document.querySelector('button');
const table = document.createElement('table');
button.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < +document.getElementById('columns').value; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < +document.getElementById('rows').value; j++) {
            let cell = row.insertCell(j);
            cell.textContent = document.getElementById('content').value;
        }
    }
    form.reset()
})
document.body.appendChild(table)


