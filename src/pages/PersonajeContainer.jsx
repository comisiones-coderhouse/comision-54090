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
        /* 
        const miPromesa = new Promise((res, rej) => {
            console.log("Pidiendo...")
            setTimeout(() => {
                res()
            }, 5000)
        }) 
        */
    }, []);

    return (
        <div>
            <Personaje character={character} />
        </div>
    )

}

export default PersonajeContainer