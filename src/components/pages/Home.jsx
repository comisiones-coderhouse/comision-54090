import React, { useState } from 'react'
import Input from "../widgets/Input"

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        //? nombre y email
        console.log(name, email)
    }

    const onNameChange = (name) => {
        //console.log(name)
        setName(name)
    }

    const onEmailChange = (email) => {
        //console.log(email)
        setEmail(email)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <Input
                    onChange={onNameChange}
                    placeholder='Escriba un nombre...'
                    text='Nombre'
                    id='name'
                />

                <Input
                    onChange={onEmailChange}
                    placeholder='Escriba un email...'
                    text='Email'
                    id='email'
                    type='email'
                />

                <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Home