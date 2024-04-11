import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-4">
            <div className="items-center hidden md:flex md:gap-4">


                <Link to="/">home</Link>

                <Link to="/characters">personajes</Link>
                
                <Link to="/contact">contacto</Link>
                
            </div>
            <MenuIcon width={20} height={20} className="md:hidden" />
        </nav>
    )
}
export default Navbar