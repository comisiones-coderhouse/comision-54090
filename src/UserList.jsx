import { useState, useEffect } from 'react'

function UserList() {

    //1) useState : se crea el estado por unica vez, si se cambia el estado, toda esta linea no se vuelve a ejecutar
    const [usuarios, setUsuarios] = useState([])

    //3)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsuarios(data)
            })
    }, [])

    //2)Eso pasa por primera vez y cada vez que cambia algo en el componente
    return (
        <div>{JSON.stringify(usuarios)}</div>
    )
}


export default UserList