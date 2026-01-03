const inputNameValue = document.getElementById('pairNameValue');
const buttonAdd = document.getElementById('buttonAdd');
const sortByName = document.getElementById('sortByName');
const sortByValue = document.getElementById('sortByValue');
const buttonDelete = document.getElementById('buttonDelete');
const pairList = document.getElementById('pairList');
const errorMessage = document.getElementById('errorMessage');

let arrList = [];

// ------Подія при натисканні на кнопку "Add" - додавання пар «Ім’я/Значення» до списку нижче
buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    // Перевірка введеної пари - якщо не відповідає, з'являється повідомлення про помилку
    if (!(/^[A-Za-z\s]+[A-Za-z0-9\s]*=[A-Za-z0-9\s]+$/g).test(inputNameValue.value)) {
        errorMessage.style.display = 'block';
        inputNameValue.style.borderColor = 'red';
    } else {
        errorMessage.style.display = 'none';
        inputNameValue.style.borderColor = 'black';
        // Видаляємо зайві пробіли
        let strInput = inputNameValue.value.replace(/\s+/g, '').split('=');
        let objPair = {key: strInput[0], value: strInput[1]};

        // Формуємо масив пар «Ім’я/Значення»
        if (arrList.some(obj => obj.key === objPair.key)) {
            arrList.forEach(item => {if(item.key === objPair.key) item.value = objPair.value});
        } else arrList.push(objPair);
        inputNameValue.value = '';

        addListCheckbox(arrList);
    }
})

// -------Подія при натисканні на кнопку "Sort by Name" - список буде відсортовано за зростанням за назвою
sortByName.addEventListener('click', (e) => {
    arrList.sort((a, b) => {return a.key.localeCompare(b.key)}) // стрінгове сортування
    addListCheckbox(arrList);
})

// ------Подія при натисканні на кнопку "Sort by Value" - список буде відсортовано за зростанням за значенням
sortByValue.addEventListener('click', (e) => {
    let arrListNumbers = [];
    let arrListStrings = [];
    // Додаємо перевірку значень "Value" на числове чи стрінгове, для різного сортування
    if (arrList.some(obj => !isNaN(+(obj.value)))) {
        for (const element of arrList) {
            if (!isNaN(+(element.value))) {
                arrListNumbers.push(element);
            }else arrListStrings.push(element);
        }
        arrListNumbers.sort((a, b) => {return a.value - b.value}); // числове сортування
        arrListStrings.sort( (a, b) => {return a.key.localeCompare(b.key)})// стрінгове сортування
        arrList = arrListNumbers.concat(arrListStrings);
        addListCheckbox(arrList);
    } else {
        arrList.sort((a, b) => {return a.key.localeCompare(b.key)})// стрінгове сортування
        addListCheckbox(arrList);
    }
})

// -----Подія при натисканні на кнопку "Delete" - всі вибрані елементи у списку будуть видалені
buttonDelete.addEventListener('click', (e) => {
    const checkedValues = [...document.querySelectorAll('input[type="checkbox"]:not(:checked)')]
        .map(checkbox => +checkbox.value); // масив всіх чекбоксів, що не відмічені
    arrList = arrList.filter(item =>
        checkedValues.includes(arrList.indexOf(item))); // фільтруємо масив залишаючи тільки не відмічені
    addListCheckbox(arrList);
})

// -----Функція яка з масиву бере всі елементи та формує на сторінці в список з checkbox
function addListCheckbox(arrList) {
    pairList.innerText = '';
    for (let i = 0; i < arrList.length; i++) {
        const li = document.createElement('li')
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `item ${i}`;
        input.value = i;
        const label = document.createElement('label');
        label.htmlFor = `item ${i}`;
        label.innerText = `${arrList[i].key}=${arrList[i].value}`;
        li.append(input, label);
        pairList.appendChild(li);
    }
}

