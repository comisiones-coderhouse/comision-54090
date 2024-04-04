import Page from '../Page'
import UserCard from '../UserCard'

import "./fetch-demo"


function Main() {

    /* const users = ["Horacio", "Carlos", "Ana", "Claudia", "Eddy"] */

    let characters;

    fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            //console.log(res.results)
            characters = res.results
            /* res.results.forEach((character)=>{
                console.log(character)
            }) */
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <Page title="Home">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
                {characters.map((user, i) => {
                    return <UserCard key={i} name={user} />
                })}
            </section>
        </Page>
    )
}

export default Main