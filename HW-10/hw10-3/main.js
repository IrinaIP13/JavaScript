// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let text = document.createElement('h1')
        text.innerText = `Name: ${document.getElementById('name').value} 
        Surname: ${document.getElementById('surname').value} 
        Age: ${document.getElementById('age').value}`;
   document.body.appendChild(text);
    document.getElementById('form').reset();
})
