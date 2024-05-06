import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
import CartWidget from "../widgets/CartWidget"
import { useState } from "react"

function Navbar() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <nav className="flex items-center justify-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                    <Link to="/category/Human">humanos</Link>
                    <Link to="/category/Alien">aliens</Link>
                    <Link to="/contact">contacto</Link>
                    <CartWidget />
                </div>
                <MenuIcon onClick={handleClick} width={20} height={20} className="md:hidden" />
            </nav>
            <nav className={`md:-left-full fixed bg-white text-black flex flex-col z-10 w-1/3 top-0 transition-all duration-300 h-full p-2 items-center gap-4  ${open ? "left-0" : "-left-full"}`}>
                <Link onClick={handleClick} to="/category/Human">humanos</Link>
                <Link onClick={handleClick} to="/category/Alien">aliens</Link>
                <Link onClick={handleClick} to="/contact">contacto</Link>
                <CartWidget />
            </nav>
        </>
    )
}
export default Navbar