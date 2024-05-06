import { toast } from "react-toastify"
import useCart from "../../hooks/useCart"
import { createSale } from "../../utils"

function Carrito() {

  const { carrito } = useCart()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.loading("Procesando compra...")
    createSale()
    toast.dismiss()
    toast.success("Compra realizada con exito!")
  }

  return (
    <div>
      <h2 className="text-4xl font-bold ">Carrito</h2>
      <div>
        {carrito.map((item) => {
          return (
            <article>
              soy un producto
            </article>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="text-black" type="text" placeholder="nombre" />
        </div>
        <div>
          <input className="text-black" type="text" placeholder="telefono" />
        </div>
        <div>
          <input className="text-black" type="text" placeholder="email" />
        </div>
        <button>Comprar</button>
      </form>
    </div>
  )
}
export default Carrito