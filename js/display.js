let post = localStorage.getItem('postId')

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    let postLayout = document.getElementById("post")

     let html =`
        
        <div class="col-md-4 mb-3 posts">
                            <div class="card">
                                <div class="card-body">
                                <div class="d-flex justify-content-end"><h6 class="" style="color: maroon;">${data.id}</h6></div>
                                    <h5 class="post-title mb-4">${data.title}</h5>
                                    <p class="post-body">${data.body}</p>
                                </div>
                            </div>
                        </div>
                        `
    postLayout.innerHTML = html;

    });