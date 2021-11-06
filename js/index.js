function myFunction(num) {
    localStorage.setItem("createId", num);
}

function getPosts() {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then((data) => {
    console.log(data)
    let postLayout = document.getElementById("post-layout")
    let html = "";
    data.forEach(e => {
        console.log(e)

        html +=`
        
        <div class="col-md-4 mb-3 posts">
                            <div class="card mt-3 h-100">
                                <div class="card-body">
                                <div class="d-flex justify-content-end "><h6 class=""  style="color: maroon;">${e.id}</h6></div>
                                    <h5 class="post-title mb-4">${e.title}</h5>
                                    <p class="post-body">${e.body}</p>
                                </div>
                            </div>
                        </div>
                        `
    postLayout.innerHTML = html;

    });
  getPost();
})
};

getPosts();

function getPost() {
    let posts = document.querySelectorAll(".posts")
    posts.forEach((e, index) => {
        e.addEventListener('click', () => {
            localStorage.setItem('postId', index + 1)
            window.location.href = 'display.html';
        })
    })
}