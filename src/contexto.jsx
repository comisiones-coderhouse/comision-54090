import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;


function CarritoProvider(props) {

    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])


    const agregarAlCarrito = (cant, item) => {
        setCantCarrito(cantCarrito + cant)
        //carrito.push(item)
        //Cuando el estado es un array/objeto se tiene que copiar primero
        //const copia = carrito.map(item => item)
        //const copia = [...carrito]
        const copia = carrito.slice(0)
        /* const copia = carrito.slice(0)
        copia.push(item)
        setCarrito(copia) */
        const productoConCantidad = item
        productoConCantidad.cantidad = cant

        copia.push(productoConCantidad)
        /* setCarrito([...carrito, item]) */
        setCarrito(copia)
    }

    const borrarDelCarrito = (id) => {
        console.log('borrando')
    }

    const vaciarCarrito = () => {
        console.log('vaciar')
        setCantCarrito(0)
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        console.log('buscando')
    }

    const valorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,
        agregarAlCarrito: agregarAlCarrito,
        borrarDelCarrito: borrarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        estaEnCarrito: estaEnCarrito
    }

    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider