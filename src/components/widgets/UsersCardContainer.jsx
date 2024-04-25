import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UsersCardList from "./UsersCardList"
import { app } from "../../firebase"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app"

//1) Habria que loguear a react (app)
//const app = initializeApp(firebaseConfig)

//2) Habria que entrar a la base de datos del proyecto (getFirestore)
/* const db = getFirestore(app) */
//console.log(db)

//3) Habria que entrar a una colección (collection)
/* const productsCollection = collection(db, "products") */
//console.log(productsCollection)

//4) Ahora recien puedo hacer una consulta

//const pedido = fetch("...")
/* const query = getDocs(productsCollection) */


/* 
pedido
    .then((res)=>{
        return res.json()
    })
*/
/* query
    .then((resultado) => {
        console.log(resultado)
        console.log(resultado.empty)
        console.log(resultado.size)
        console.log(resultado.docs)
        const productos = resultado.docs.map(doc => { return doc.data() })
        console.log(productos)
    })
    .catch((error) => {
        console.log(error)
    })
 */







function UsersCardContainer() {

    const [characters, setCharacters] = useState([])
    const params = useParams()

    useEffect(() => {

        const db = getFirestore(app)
        const productsCollection = collection(db, "products")
        const query = getDocs(productsCollection)
        query
            .then((resultado) => {
                const productos = resultado.docs.map(doc => { return doc.data() })
                setCharacters(productos)
            })

        /* let pedido;

        if (params.categoria) {
            pedido = fetch("https://rickandmortyapi.com/api/character/?species=" + params.categoria)
        } else {
            pedido = fetch("https://rickandmortyapi.com/api/character")
        }

        pedido.then((res) => {
            return res.json()
        })
            .then((res) => {
                setCharacters(res.results)
            })
            .catch((err) => {
                console.log(err)
            }) */

    }, [params.categoria])

    return (
        <div className="">
            <h2 className="mb-5 text-4xl font-bold">Personajes</h2>
            <UsersCardList characters={characters} />
        </div>
    )
}
export default UsersCardContainer