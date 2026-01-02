// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('convertor');
const resFunt = document.querySelector('p')
document.body.appendChild(resFunt);
input.addEventListener('input', () => {
    if (!isNaN(input.value)) {
    resFunt.textContent = `Це дорівнює: ${+input.value*2.20462} фунтів`} else
    {resFunt.textContent = 'Не коректне значення!'}
});
