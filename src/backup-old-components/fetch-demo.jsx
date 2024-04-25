/* fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        const data = res.json()
        return data
    })
    .then((res) => { 
        console.log(res)
        console.log("todo bien")
    })
    .catch((err) => {
        console.log(err)
        console.log("todo mal")
    })
 */


/* fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    body : JSON.stringify({ name : "Horacio" }),
    headers : {
        "content-type" : "application/json"
    }
}) */

/* fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=061dcbb3e1e817ea50fa17e235b82040")
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
}) */

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })