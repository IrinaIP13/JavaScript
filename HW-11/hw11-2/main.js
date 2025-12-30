// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObj => {
        let {recipes} = recipesObj;
        console.log(recipes);

        for (const recElement of recipes) {
            const div = document.createElement('div')

            div.innerText = `
            id: ${recElement.id},
            name: ${recElement.name},
            ingredients: ${arrFunc(recElement.ingredients)}
            instructions: ${arrFunc(recElement.instructions)}
            prepTimeMinutes: ${recElement.prepTimeMinutes},
            cookTimeMinutes: ${recElement.cookTimeMinutes},
            servings: ${recElement.servings},
            difficulty: ${recElement.difficulty},
            cuisine: ${recElement.cuisine},
            caloriesPerServing: ${recElement.caloriesPerServing},
            tags: ${arrFunc(recElement.tags)}
            userId: ${recElement.userId},
            rating: ${recElement.rating},
            reviewCount: ${recElement.reviewCount},
            mealType: ${arrFunc(recElement.mealType)}
            image: `;

            let img = document.createElement('img');
            img.style.width = '300px';
            img.src = recElement.image;

            document.body.append(div, img);
        }
    });

function arrFunc(arr) {
    let res = [];
    for (const arrElement of arr) {
        res += ' \n "' + arrElement + '",';
    } return res;
}