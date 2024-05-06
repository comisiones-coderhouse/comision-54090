import { ShoppingCart } from "lucide-react"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"

function CartWidget() {

    const elValorDelContexto = useCart()
    
    return (
        <Link to="/cart" className="flex items-center">
            <ShoppingCart />
            {elValorDelContexto.cantCarrito}
        </Link>
    )
}
export default CartWidget