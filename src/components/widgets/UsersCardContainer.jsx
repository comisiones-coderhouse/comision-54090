import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UsersCardList from "./UsersCardList"
import { getProducts, getProductsFromCategories } from "../../utils"


function UsersCardContainer() {

    const [characters, setCharacters] = useState([])
    const params = useParams()

    useEffect(() => {
        
        if(params.categoria) {
            getProductsFromCategories(params.categoria)
            .then((resultado)=>{
                setCharacters(resultado)
            })
        } else {
            getProducts()
            .then((resultado)=>{
                setCharacters(resultado)
            })
        }


    }, [params.categoria])

    return (
        <div className="">
            <h2 className="mb-5 text-4xl font-bold">Personajes</h2>
            <UsersCardList characters={characters} />
        </div>
    )
}

export default UsersCardContainer