import { useEffect, useState } from "react"
import UserCard from "./UserCard"

function UserCardContainer() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setCharacters(res.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {characters.map((character) => {
                return <UserCard key={character.id} character={character} />
            })}
        </>
    )
}
export default UserCardContainer