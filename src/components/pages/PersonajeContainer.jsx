import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Personaje from "./Personaje";
import { getProductDetail } from "../../utils";


function PersonajeContainer() {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getProductDetail(id)
        .then((resultado)=>{
            setCharacter(resultado)
        })
    }, []);

    return (
        <div>
            <Personaje character={character} />
        </div>
    )

}

export default PersonajeContainer