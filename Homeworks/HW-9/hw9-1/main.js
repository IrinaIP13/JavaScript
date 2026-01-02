// #8Nmt60ZT
//
// – створити блок,
const div = document.createElement("div");
div.innerText = 'TEXT'

//
// – додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap',  'collapse',  'alpha', 'beta');

//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'red';
div.style.color = 'white';
div.style.fontSize = '50px';

//
// – додати цей блок в body.
const body = document.querySelector('body');
body.appendChild(div);
//
// – клонувати його повністю, та додати клон в body.
const cloneDiv = div.cloneNode(true);
body.appendChild(cloneDiv);