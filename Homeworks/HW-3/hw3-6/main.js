// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
//
let products = [
    {title: 'Milk',
        price: 22,
        image: 'https://www.oldenburger-dairy.com/media/00/6c/e1/1737642194/11067_1l_3_5_410x410_full_cream_milk.png'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://www.zestaceylontea.com/wp-content/uploads/2020/07/100-TEABAG-Real-Ceylon-2020-01-1.jpg'
    },
];
//
// ШАБЛОН
//
// <div class=”product-card”>
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
// <img src=”IMAGE” alt=”” class=”product-image”>
// </div>
// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту



document.write(`<style>
img {
width: 150px;
height: 150px;
object-fit: cover;
}
</style>`)

for (const productsKey in products) {
    let product = products[productsKey];
    document.write(`<div class=”product-card”>
<h3 class=”product-title”>${product.title}. Price – ${product.price}</h3>
<img src=${product.image} alt=”” class=”product-image”>
</div>`);
}