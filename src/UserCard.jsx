import { Button } from "antd";
import { useState } from 'react';


function UserCard({ name , age , isDev }) {
    /*
    const elResultadoDelHook = useState("Horacio")//["Horacio", fn(){}]
    const nombre = elResultadoDelHook[0]//undefined
    const setNombre = elResultadoDelHook[1] 
    */
    const [nombre, setNombre] = useState("Horacio")

    const handleClick = () => {
        setNombre("Carlos")
    }

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" src="https://picsum.photos/400" alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{name}</h2>
            <p className="text-sm">{age} años</p>
            <Button onClick={handleClick}>ver mas</Button>
        </div>
    )
}


export default UserCard;