// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let value = 0;
    for (const obj of currencyValues) {
        if (obj.currency === exchangeCurrency) value = obj.value;
    }
    if (value === 0) {
        return sumUAH/value;
    } else return -1;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));