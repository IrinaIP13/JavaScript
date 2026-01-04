const userId = JSON.parse(localStorage.getItem('userId')); // Дістаємо з localStorage номер користувача
const postId = JSON.parse(localStorage.getItem('postId')); // та номер поста

// ----Дістаємо масив постів та виводимо всю інформацію на сторінку
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        const postDetailsDiv = document.getElementById('postDivId')
        let post = posts.find(post => post.id === postId);
        postDetailsDiv.innerText =
            `userId: ${post.userId},
            id: ${post.id},
            title: ${post.title},
            body: ${post.body}`;
    })

const divContCom = document.createElement('div');
divContCom.id = 'divContCom';
// ----Дістаємо масив коментарів обраного посту
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        // -- Ітеруємо масив і виводимо на сторінку всі коментарі
        for (const comment of comments) {
            const commentBody = document.createElement('div')
            commentBody.classList.add('commentBody');
            commentBody.innerText = `"${comment.body}"`;
            divContCom.appendChild(commentBody);
        }
        document.body.appendChild(divContCom);
    })