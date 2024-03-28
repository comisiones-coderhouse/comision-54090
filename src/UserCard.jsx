import { Button } from "antd";
import { useEffect, useState } from 'react';

function UserCard({ name }) {

    const [nombre, setNombre] = useState(name)

    function handleClick() {
        setNombre("Carlos")
    }

    /* useEffect(function) */
    /* useEffect(function,[]) */

    /* useEffect(() => {
        window.addEventListener("resize", () => {
            console.log("width", window.innerWidth)
        })
    }, []) */


    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" src="https://picsum.photos/400" alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{nombre}</h2>
            <Button onClick={handleClick}>ver mas</Button>
        </div>
    )
}


export default UserCard;