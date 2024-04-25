import { useContext } from "react"
import { contexto } from "../contexto";

const useCart = () => {
    const valorActual = useContext(contexto)
    return valorActual
}

export default useCart;