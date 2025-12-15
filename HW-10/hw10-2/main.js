// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const paragraph = document.createElement('p');
paragraph.innerText = 'Тобі ще не виповнилось 18';
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.querySelector('input').value<18) {document.body.appendChild(paragraph);} else {paragraph.innerText = 'Вітаю, тобі більше 18 років'}
})