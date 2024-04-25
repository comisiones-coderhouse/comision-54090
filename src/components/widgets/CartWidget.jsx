import { ShoppingCart } from "lucide-react"
import useCart from "../../hooks/useCart"

function CartWidget() {

    const elValorDelContexto = useCart()
    
    return (
        <>
            <ShoppingCart />
            {elValorDelContexto.cantCarrito}
        </>
    )
}
export default CartWidget