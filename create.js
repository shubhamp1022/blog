const blogForm = document.getElementById('blogForm');
const blogTitle = document.getElementById('blogTitle');
const blogDescription = document.getElementById('blogDescription');
const blogList = document.getElementById('blogList');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = blogTitle.value;
    const description = blogDescription.value;

    if (title.trim() && description.trim()) {
        const blog = document.createElement('div');
        blog.classList.add('blog');
        blog.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <button class="delete-btn">Delete</button>
        `;
        blogList.appendChild(blog);

        blogForm.reset();
    } else {
        alert('Please enter both title and description.');
    }
});

blogList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});
