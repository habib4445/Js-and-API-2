const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
       displayPost(data)
    })
}
const displayPost=(posts)=>{
   for(const post of posts){
    console.log(post.title)
   }
}
handlePost();