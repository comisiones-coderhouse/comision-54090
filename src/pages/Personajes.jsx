import UserCardContainer from "../UserCardContainer"

function Personajes() {

    return (
        <div>
            <h2>Personajes</h2>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
                <UserCardContainer/>
            </section> 
        </div>
    )
}

export default Personajes