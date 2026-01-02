// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


const sessionList = JSON.parse(localStorage.getItem('countSessions'))

for (const element of sessionList) {
    let p = document.createElement('p');
    p.innerText = element;
    console.log(p.innerText)
    document.body.appendChild(p);
}

