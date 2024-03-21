import { Menu } from "lucide-react"
import miImagen from "./icono-menu.png"

function Header() {
    return (
        <header className="flex justify-between p-4 shadow-md bg-slate-400">
            <h1 id="titulo" className="encabezado">Hola Mundo</h1>
            <nav className="hidden md:flex md:gap-4">
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
                <img src="/icono-menu.png" alt="" />
                <img src={miImagen} alt="" />
                <Menu width={20} height={20}/>
            </nav>
        </header>
    )
}

export default Header