import { Button } from "antd";
import { useState } from "react";
//React Hooks : son funciones comunes que le dan a un componente una funcionalidad nueva


/* 

const span = document.querySelector("span")
const button = document.querySelector("button")

let counter = 0

const handleClick = () => {
    counter++
    span.innerText = counter
}

button.addEventListener("click",handleClick)

*/

function UserCard(props) {

    const elResultado = useState(1)
    const miEstado = elResultado[0] //1
    const setMiEstado = elResultado[1] //function

    /* console.log(elResultado) */

    const [counter,setCounter] = useState(0)
    //let counter = 0

    const handleClick = () => {
        //counter++
        //counter += 1
        //counter = counter + 1
        const nuevoValor = counter + 1
        setCounter(nuevoValor)
    }

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105">
            <img className="w-full rounded-md" src="https://picsum.photos/400" alt="card image" />
            <h2 className="my-2 font-bold">{props.name}</h2>
            <Button>ver mas</Button>
            {/* <button onClick={handleClick}>
                like
                <span>{counter}</span>
            </button> */}
        </div>
    )
}


export default UserCard;