import { useState, useEffect } from 'react'

function UserList() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsuarios(data)
            })
    }, [])

    return (
        <div>{JSON.stringify(usuarios)}</div>
    )
}


export default UserList