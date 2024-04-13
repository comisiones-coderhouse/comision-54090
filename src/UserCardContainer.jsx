import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import { useParams } from "react-router-dom"

function UserCardContainer() {

    const [characters, setCharacters] = useState([])
    const params = useParams()
    
    //console.log(params)
    //console.log(params.categoria)
    /* if(params.categoria){
        console.log("hay que hacer un fetch a : " + params.categoria)
    } else {
        console.log("no hay categoria, hay que pedir todos los productos")
    } */

    //useEffect(()=>{},[]) => Esto se ejecuta UNA SOLA VEZ
    //useEffect(()=>{},[?]) => Esto se ejecuta UNA VEZ al comienzo del componente y CADA VEZ quye las variables dentro del array cambien

    useEffect(() => {

        //https://rickandmortyapi.com/api/character => todos
        //https://rickandmortyapi.com/api/character/?species=human => por categoria humano
        //https://rickandmortyapi.com/api/character/?species=alien => por categoria alien

        let pedido;

        if(params.categoria){
            //console.log("hay que hacer un fetch a : " + params.categoria)
            pedido = fetch("https://rickandmortyapi.com/api/character/?species="+params.categoria)
        } else {
            //console.log("no hay categoria, hay que pedir todos los productos")
            pedido = fetch("https://rickandmortyapi.com/api/character")
        }


        /* fetch("https://rickandmortyapi.com/api/character") */
            pedido.then((res) => {
                return res.json()
            })
            .then((res) => {
                /* console.log(res.results) */
                setCharacters(res.results)
            })
            .catch((err) => {
                console.log(err)
            })
            
    }, [params.categoria])

    return (
        <>
            {characters.map((character) => {
                return <UserCard key={character.id} character={character} />
            })}
        </>
    )
}
export default UserCardContainer