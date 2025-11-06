// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
let arrayBooks = [
    {
        title: 'Мастер и Маргарита',
        pageCount: 480,
        genre: ['фантастика', 'роман'],
        author: ['Михаил Булгаков']
    },
    {
        title: 'Кобзар',
        pageCount: 576,
        genre: ['поезія'],
        author: ['Тарас Шевченко']
    },
    {
        title: 'Подсознание может все',
        pageCount: 160,
        genre: ['психология'],
        author: ['Джон Кехо']
    },
    {
        title: 'Пульт Ґвенді»',
        pageCount: 160,
        genre: ['роман'],
        author: ['Стівен Кінг', 'Річард Чізмар']
    },
    {
        title: 'Крадійка книжок',
        pageCount: 416,
        genre: ['роман'],
        author: ['Маркус Зузак']
    },
    {
        title: 'Хроніки Нарнії',
        pageCount: 912,
        genre: ['фантастика', 'роман'],
        author: ['Клайв Стейплз Льюїс']
    },
    {
        title: 'Код да Вінчі',
        pageCount: 480,
        genre: ['роман', 'трилер', 'детектив'],
        author: ['Ден Браун']
    },
    {
        title: 'Зелена миля',
        pageCount: 432,
        genre: ['роман'],
        author: ['Стівен Кінг']
    }
]
// – знайти найбільшу книжку.
let max = 0;
let bookBig = '';
for (const arrayBooksKey in arrayBooks) {
    let book = arrayBooks[arrayBooksKey];
    if (book.pageCount > max) {
        max = book.pageCount;
        bookBig = book.title;
    }
}
console.log(`Найбільша книжка "${bookBig}" - ${max} сторінок`)
//
// – знайти книжку/ки з найбільшою кількістю жанрів
max = 0;
bookBig = '';
for (const arrayBooksKey in arrayBooks) {
    let book = arrayBooks[arrayBooksKey];
    if (book.genre.length > max) {
        max = book.genre.length;
        bookBig = book.title;
    }
}
console.log(`"${bookBig}" - ${max} жанрів`)
//
// – знайти книжку/ки з найдовшою назвою
max = 0;
bookBig = '';
for (const arrayBooksKey in arrayBooks) {
    let book = arrayBooks[arrayBooksKey];
    if (book.title.length > max) {
        max = book.title.length;
        bookBig = book.title;
    }
}
console.log(`"${bookBig}" - найдовша назва`)
//
// – знайти книжку/ки, які писали 2 автори
for (const arrayBooksKey in arrayBooks) {
    let book = arrayBooks[arrayBooksKey];
    if (book.author.length === 2) {
        console.log(`"${book.title}" - писали 2 автори`)
    }
}

//
// – знайти книжку/ки, які писав 1 автор
for (const arrayBooksKey in arrayBooks) {
    let book = arrayBooks[arrayBooksKey];
    if (book.author.length === 1) {
        console.log(`"${book.title}" - писав 1 автор`)
    }
}
