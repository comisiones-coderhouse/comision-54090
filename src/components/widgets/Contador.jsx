import { useState } from "react"

function Contador(props) {

    const [numero, setNumero] = useState(0)
    
    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        setNumero(numero - 1)
    }

    const confirmar = () => {
        props.handleConfirm(numero)
    }

    return (
        <div>
            <div className="flex gap-4">
                <button onClick={incrementar} className="p-4 text-black bg-white rounded-full">+</button>
                <p>{numero}</p>
                <button onClick={decrementar} className="p-4 text-black bg-white rounded-full">-</button>
            </div>
            <button onClick={confirmar}>confirmar cantidad</button>
        </div>
    )
}

export default Contador