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
            div.style.marginLeft = '50px';

            div.innerHTML = `
            <b>id</b>: ${recElement.id},<br>
            <b>name</b>: ${recElement.name},<br>
            <b>ingredients</b>: ${arrFunc(recElement.ingredients)}
            <b>instructions</b>: ${arrFunc(recElement.instructions)}
            <b>prepTimeMinutes</b>: ${recElement.prepTimeMinutes},<br>
            <b>cookTimeMinutes</b>: ${recElement.cookTimeMinutes},<br>
            <b>servings</b>: ${recElement.servings},<br>
            <b>difficulty</b>: ${recElement.difficulty},<br>
            <b>cuisine</b>: ${recElement.cuisine},<br>
            <b>caloriesPerServing</b>: ${recElement.caloriesPerServing},<br>
            <b>tags</b>: ${arrFunc(recElement.tags)}
            <b>userId</b>: ${recElement.userId},<br>
            <b>rating</b>: ${recElement.rating},<br>
            <b>reviewCount</b>: ${recElement.reviewCount},<br>
            <b>mealType</b>: ${arrFunc(recElement.mealType)}`;

            let img = document.createElement('img');
            img.style.width = '300px';
            img.style.marginTop = '20px';
            img.style.marginLeft = '50px';
            img.src = recElement.image;

            document.body.append(img, div);
        }
    });

function arrFunc(arr) {
    let res = `<ul>`;
    for (const arrElement of arr) {
        res += `<li>${arrElement}</li>`;
    }return res + `</ul>`;
}
