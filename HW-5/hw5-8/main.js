// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let array = array => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

array([-57, false, 237, 'banana', 0, null, 1, 'apple', 2, true, 3]);