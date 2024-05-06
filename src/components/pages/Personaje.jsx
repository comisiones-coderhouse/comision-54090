import { toast } from "react-toastify"
import useCart from "../../hooks/useCart"
import Contador from "../widgets/Contador"

function Personaje(props) {

    const valorDelContexto = useCart()

    const handleConfirm = (numero) => {
        valorDelContexto.agregarAlCarrito(numero, props.character)
        toast.success("Se agrego un producto al carrito!")
    }

    return (
        <>
            <p className="mb-1 text-xl font-bold text-gray-500">Detalle del personaje</p>
            <h2 className="mb-20 text-4xl font-bold">{props.character.title}</h2>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img className="w-full rounded-md max-h-[250px] lg:w-auto object-cover" src={props.character.imageUrl} alt={props.character.title} />
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-500">Precio</h3>
                        <p>${props.character.price}</p>
                        <h3 className="mb-2 text-xl font-bold text-gray-500">Descripcion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a repudiandae facilis consectetur. Hic nemo optio possimus ex ad qui? Natus eligendi, veniam sequi voluptas numquam corrupti eos aperiam veritatis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a repudiandae facilis consectetur. Hic nemo optio possimus ex ad qui? Natus eligendi, veniam sequi voluptas numquam corrupti eos aperiam veritatis?</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-500">Detalles Tecnicos</h3>
                        <p><span className="font-bold">Especie</span> : {props.character.species}</p>
                        <p><span className="font-bold">vive en</span> : {props.character.origin ? props.character.origin.name : "Desconocido"}</p>
                    </div>

                    <Contador handleConfirm={handleConfirm} />
                </div>
            </section>
        </>
    )
}
export default Personaje