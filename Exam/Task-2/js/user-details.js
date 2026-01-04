const userId = JSON.parse(localStorage.getItem('userId')); // Дістаємо з localStorage номер користувача

// ----Дістаємо масив користовучів
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userDetailsDiv = document.getElementById('userDivId')
        // Знаходимо обраного користувача і виводимо всю інформацію про нього на сторінку
        let user = users.find(user => user.id === userId);
        userDetailsDiv.innerText =
            `id: ${user.id}, name: ${user.name}, 
            username: ${user.username},
            email: ${user.email},
            address: 
            street: ${user.address.street},
            suite: ${user.address.suite},
            city: ${user.address.city},
            zipcode: ${user.address.zipcode},
            geo:
                lat: ${user.address.geo.lat},
                lng: ${user.address.geo.lng},
        phone: ${user.phone},
        website: ${user.website},
        company: 
            name: ${user.company.name},
            catchPhrase: ${user.company.catchPhrase},
            bs: ${user.company.bs},
        `;
    })

const buttonPost = document.getElementById('buttonPost');
buttonPost.innerText = 'Post of current user...';

const divContPosts = document.createElement('div');
divContPosts.id = 'divContPosts';

// При натисканні на кнопку підключаємо подію яка дістає масив постів обраного користувача
 buttonPost.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            // -- Ітеруємо масив і title кожного поста виводимо на сторінку
            for (const post of posts) {
                const postTitle = document.createElement('div')
                postTitle.classList.add('postTitle');
                postTitle.innerText = `"${post.title}"`;
                // -- Додаємо кнопку
                const button = document.createElement('button');
                button.classList.add('buttonTitlePost');
                button.innerText = 'Details...'

                // -- При натисканні переходимо на сторінку post-details.html
                button.onclick = function() {
                    window.location.href = `post-details.html`;
                    // зберігаємо у localStorage номер обраного поста
                    localStorage.setItem('postId', JSON.stringify(post.id));
                };
                postTitle.appendChild(button);
                divContPosts.append(postTitle);
            }
        })
    document.body.appendChild(divContPosts);
})

