// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
    console.log(i + '-й крок');
    document.write(`<h3>${i}-й крок</h3>`)
}
}