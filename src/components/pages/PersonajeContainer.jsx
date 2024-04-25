import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Personaje from "./Personaje";


function PersonajeContainer() {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + id)
            .then((res) => {
                return res.json()
            })
            .then((personaje) => {
                setCharacter(personaje)
            })
    }, []);

    return (
        <div>
            <Personaje character={character} />
        </div>
    )

}

export default PersonajeContainer