// #NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let arrayPhotos = [
    'https://images.unsplash.com/photo-1765372823786-1e6dd2c3c7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1764546983111-21c91fb42f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1763908161617-3a0473ab01e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1712025853040-c3bd38131c7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0ODV8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764377848067-aefbce306f80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1765498068281-67e9971c0b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764957078421-ffc0a383a310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764957079416-de004aadbb8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMjN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764957078546-35495d3d2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMjV8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764377850160-d6250764116f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNDh8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764281186315-53ece609e1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNTZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764712754802-efe14d4478b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzODF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764760764956-fcb78be107a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOTZ8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1764601209257-593473bf212e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MDN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764708844823-00d2188dafd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MTN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763996147774-522014c41e74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MjF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764588029885-d115de3bda1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDJ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1761746555964-54d189e38bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDV8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764257416209-e2044659503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764522234533-a6d5213cedca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDh8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763661665960-f4aaf7c81519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OTB8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763620077359-b16097b07bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NDZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1761675688044-0eb981b90481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2ODJ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1762883469110-cc07660a8036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MTN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763146969574-d25c60f7f182?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NjR8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763072021375-578327ab68c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MTF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1765147214613-2ee8853ca50d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTl8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1765359483105-7990abedc5e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1764190197811-b630d306383a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1765318608597-29efe94730b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764377723685-31e60ed8e550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1764253418831-9fb644e8646a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1756177506530-2c6474b615d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxGem8zenVPSE42d3x8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1763477080227-6e591f5017ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0M3xGem8zenVPSE42d3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NXxGem8zenVPSE42d3x8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1762532986026-92782fe01fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxGem8zenVPSE42d3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1756131938894-83600503ca8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3xGem8zenVPSE42d3x8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NjZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763076705118-8c3c03fee057?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NTZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1762117869403-6e40adbf9240?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDU0fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1761953111449-baa0a316ab45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTY1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1761959939997-bde7210e7b1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjAwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1761495742669-2ff647adc5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjA0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1761491924438-c529b4789a12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzM0fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1761426425340-6f17e0f23b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDMzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1760709071560-0f2b1daaf5cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjc3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1747447597297-0716bbd5b049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODQ1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759434188986-58432949b5a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODY4fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1746483965671-44ed1704e4fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTM1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1760556415132-533affdd9ccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDYxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1760529700080-0a6ddd4d5db7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTEzfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1698406096055-91a364147db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTIyfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1760464278703-3672cf49e616?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTM0fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1760464930661-803fd48254da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTQyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1760312379880-1a5623c5f835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTg3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1760050777072-bb51faed0bb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjI5fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1759760099694-60cd4c0e3f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzI3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759191639970-0640f2bd14de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzI5fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1745750747043-da33e463f361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDIwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759400762542-8468e42b792f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTA4fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1759428080533-2724158d040b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTQ2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759790721850-e551d4829f14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTU0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759671826409-ad0aae2a2485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjEwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1686238349945-82074ce9f02f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MzY2MDk1MXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1522369700999-f70d37096690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzl8MzY2MDk1MXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1730233719882-890f7043eb9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTN8MzY2MDk1MXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nzl8MzY2MDk1MXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1585418515278-4d2246f56a28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTMxfDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596248037896-f0be026ca708?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTM2fDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1625213866859-1cc9c7bcee60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTQ0fDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1660510337935-087bd4099d7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTYwfDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTY1fDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTczfDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1578249949606-334a0dd4dd8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjM0fDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjg2fDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1599048775028-6269a46f09cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzYwfDM2NjA5NTF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1765447041712-b5c9755bbc87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1714081822862-cb29257e2c95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764105720554-695f1673fb50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763987300719-fd27c51a3227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763986665850-6e66549aa8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763198215363-aeb2decffeda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1765319939572-1da9dfddda61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHcxNUhmUW95elhVfHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1764411768023-d80fc580feb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXx3MTVIZlFveXpYVXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1764540821645-de005b02b1de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1764889743602-21cd1d4e4745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1763688496557-46d22a1fbe47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0OHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675006717262-a8f9aed248a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4OHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1757333239616-311e2240c045?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwMnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1755249583314-fec47e52ac42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3MXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1755417146741-8aafab9ec528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3MHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1748280816879-89b9ca0d4aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxNHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1754190868325-524c5be77259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzMnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1753471644362-5b1e77197ea8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4N3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1752865066686-a58cb4d5b966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzM3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8'
]

const pict = document.getElementById('pict')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let page = +localStorage.getItem('page');
pagePrew(page)

prev.addEventListener('click', (e) => {
    if (page!==0) {
        page -= 10;
        pagePrew(page)
    }
})

next.addEventListener('click', (e) => {
    if (page!==90) {
        page += 10;
        pagePrew(page)
    }
})

function pagePrew() {
    pict.innerHTML = '';
    localStorage.setItem('page', page);
    for (let i = page; i < page+10; i++) {
        let img = document.createElement('img');
        img.src = arrayPhotos[i];
        pict.appendChild(img);
    }
}

