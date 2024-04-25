import React from 'react'

function Input({
    id = "test",
    type = "text",
    placeholder = "Escriba un valor...",
    text = "Input test",
    onChange
}) {

    const handleChange = (e) => {
        //console.log(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className='my-2 flex flex-col gap-2'>
            <label htmlFor={id} className='text-white'>{text}</label>
            <input type={type} id={id} placeholder={placeholder} className=' text-black p-2 rounded-md shadow-md' onChange={handleChange} />
        </div>
    )
}

export default Input