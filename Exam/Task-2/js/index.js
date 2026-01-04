const containerDiv = document.getElementById("container");

// ----Дістаємо масив користовучів
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        // -- Ітеруємо масив і кожного користувача виводимо на сторінку
        for (const user of users) {
            const userDiv = document.createElement("div");
            userDiv.className = 'userDiv';
            const p = document.createElement("p");
            p.className = 'textUser'
            p.innerText = `
            id: ${user.id}
            name: ${user.name}`

            // -- Додаємо кнопку
            const button = document.createElement("button");
            button.className = 'buttonUsersDetails';
            button.id = user.id;
            button.innerText = `User details...`

            // -- При натисканні переходимо на сторінку user-details.html
            button.onclick = function() {
                window.location.href = `user-details.html`;
                //зберігаємо у localStorage номер користувача
                localStorage.setItem('userId', JSON.stringify(user.id));
                };
            userDiv.append(p, button);
            containerDiv.appendChild(userDiv);
        }
    });

