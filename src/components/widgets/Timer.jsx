import { useState, useEffect } from 'react'

function Timer() {

    //let numero = 0
    const [numero, setNumero] = useState(0)

    //useEffect(a,b)
    //useEffect(function)
    //useEffect(function,array)
    
    //Este efecto se va a ejecutar por lo menos una vez, al comienzo de la carga de la pagina, y luego va a volver a ejecutarse si lo que este en el array cambia
    useEffect(()=>{
        setInterval(() => {
            //numero++
            //setNumero(valor)
            //setNumero(callback)

            //setNumero((prevState)=>{ return prevState + 1 })
            setNumero(prevState => prevState + 1)

        }, 1000)
    },[])


    return (
        <div>Timer : {numero}</div>
    )
}

//Timer() : se crea el estado
//Timer() : no se crea el estado de nuevo
//Timer() : no se crea el estado de nuevo
//Timer() : no se crea el estado de nuevo
//Timer() : no se crea el estado de nuevo

export default Timer








/* setTimeout(()=>{
    console.log("hola")
},4000)
 */

/* setInterval(()=>{
    console.log("hola")
},1000) */
