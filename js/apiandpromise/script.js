const API = 'https://jsonplaceholder.typicode.com/posts';
const currentUserId = 1;
const postsContainer = document.getElementById('postsContainer');

// Modal elements
const addPostBtn = document.getElementById('addPostBtn');
const postModal = document.getElementById('postModal');
const cancelBtn = document.getElementById('cancelBtn');
const submitPostBtn = document.getElementById('submitPostBtn');
const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');


// Read more Modal
const readModal = document.getElementById('readModal');
const readTitle = document.getElementById('readTitle');
const readBody = document.getElementById('readBody');
const closeReadBtn = document.getElementById('closeReadBtn');


// Fetch API posts with delay
function fetchApiPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(API)
                .then(res => res.json())
                .then(data => resolve(data.slice(0, 5)))
                .catch(err => reject(err));
        }, 0);
    });
}

// Validate user input
function validatePostInput(title, body) {
    return new Promise((resolve, reject) => {
        if (!title || !body) {
            reject("Both title and body are required!");
        } else {
            resolve({ title, body });
        }
    });
}

// Simulate local save delay
function delaySaveToLocalStorage(post) {
    return new Promise(resolve => {
        setTimeout(() => {
            const saved = JSON.parse(localStorage.getItem('myPosts')) || [];
            const updated = [post, ...saved];
            localStorage.setItem('myPosts', JSON.stringify(updated));
            resolve();
        }, 500);
    });
}

//  Render a single post
function renderPostCard(post, isUserPost = false) {
    const card = document.createElement('div');
    card.className = 'post-card';

    card.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    ${isUserPost ? `
      <div class="post-actions">
        <button class="edit-btn" data-id="${post.id}">Edit</button>
        <button class="delete-btn" data-id="${post.id}">Delete</button>
        <button class="read-btn" data-id="${post.id}">Read More</button>
      </div>
    ` : ''}
  `;

    postsContainer.appendChild(card);
}

//  Load all posts (API + local)
async function fetchPosts() {
    postsContainer.innerHTML = '';

    try {
        const [apiPosts, userPosts] = await Promise.all([
            fetchApiPosts(),
            JSON.parse(localStorage.getItem('myPosts')) || []
        ]);

        // First show user-created posts with buttons
        userPosts.forEach(post => renderPostCard(post, true));

        // Then show API posts
        apiPosts.forEach(post => renderPostCard(post, false));

        attachEventListeners();

    } catch (err) {
        console.error("Error loading posts:", err);
    }
}

// Attach edit,delete and read more events
function attachEventListeners() {
    // Edit
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const userPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
            const post = userPosts.find(p => p.id == id);
            if (post) {
                postTitle.value = post.title;
                postBody.value = post.body;
                postModal.dataset.editing = id;
                postModal.classList.remove('hidden');
            }
        });
    });

    // Delete
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            let userPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
            userPosts = userPosts.filter(p => p.id != id);
            localStorage.setItem('myPosts', JSON.stringify(userPosts));
            fetchPosts();
        });
    });

    // Read More 
    document.querySelectorAll('.read-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const userPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
            const post = userPosts.find(p => p.id == id);
            if (post) {
                readTitle.textContent = post.title;
                readBody.textContent = post.body;
                readModal.classList.remove('hidden');
            }
        });
    });

    closeReadBtn.addEventListener('click', () => {
        readModal.classList.add('hidden');
    });



    // New post modal
    addPostBtn.addEventListener('click', () => {
        postModal.dataset.editing = '';
        postTitle.value = '';
        postBody.value = '';
        postModal.classList.remove('hidden');
    });

    // Cancel modal
    cancelBtn.addEventListener('click', () => {
        postModal.classList.add('hidden');
        postModal.dataset.editing = '';
        postTitle.value = '';
        postBody.value = '';
    });

    //  Create post
    submitPostBtn.addEventListener('click', async () => {
        const title = postTitle.value.trim();
        const body = postBody.value.trim();
        const editingId = postModal.dataset.editing;

        try {
            const { title: validTitle, body: validBody } = await validatePostInput(title, body);
            const userPosts = JSON.parse(localStorage.getItem('myPosts')) || [];

            if (editingId) {
                // Update existing
                const updatedPosts = userPosts.map(post => {
                    if (post.id == editingId) {
                        return { ...post, title: validTitle, body: validBody };
                    }
                    return post;
                });
                localStorage.setItem('myPosts', JSON.stringify(updatedPosts));
                alert('Post updated!');
            } else {
                // Create new post
                const newPost = {
                    id: Date.now(), // unique ID
                    title: validTitle,
                    body: validBody,
                    userId: currentUserId
                };
                await delaySaveToLocalStorage(newPost);
                alert('Post created!');
            }

            postModal.classList.add('hidden');
            postModal.dataset.editing = '';
            postTitle.value = '';
            postBody.value = '';
            fetchPosts();
        } catch (err) {
            alert(err);
        }
    });

}
fetchPosts();
