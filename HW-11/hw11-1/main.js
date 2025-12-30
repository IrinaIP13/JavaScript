// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartObject => {
        let {carts} = cartObject;

        for (const cartElement of carts) {
            const cartDiv = document.createElement('div')
            cartDiv.style.margin = '10px'
            cartDiv.style.fontSize = '20px';
            cartDiv.innerText = `
            id: ${cartElement.id},
            total: ${cartElement.total},
            discountedTotal: ${cartElement.discountedTotal},
            userId: ${cartElement.userID},
            totalProducts: ${cartElement.totalProducts},
            totalQuantity: ${cartElement.totalQuantity},
            products: `;
            document.body.appendChild(cartDiv);
            prodFunc(cartElement.products);
        }
    });

function prodFunc(obj) {
    for (const objElement of obj) {
        const prodDiv = document.createElement('div')
        prodDiv.style.marginLeft = '80px';
        prodDiv.innerText =
            `id: ${objElement.id},
            title: ${objElement.title},
            price: ${objElement.price},
            quantity: ${objElement.quantity},
            total: ${objElement.total},
            discountPercentage: ${objElement.discountPercentage},
            discountedTotal: ${objElement.discountedTotal},
            thumbnail: `

        let img = document.createElement('img');
        img.style.width = '120px';
        img.style.marginLeft = '80px';
        img.style.marginBottom = '20px';
        img.src = objElement.thumbnail;

        document.body.append(prodDiv, img);
    }
}