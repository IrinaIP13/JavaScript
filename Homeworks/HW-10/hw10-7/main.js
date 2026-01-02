// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let array = JSON.parse(localStorage.getItem(arrayName));
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('countSessions', {})

