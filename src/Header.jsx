import { MenuIcon } from "lucide-react"

function Header() {
    return (
        <header className="flex justify-between p-4 shadow-md bg-slate-400">
            <h1 id="titulo" className="encabezado">Marvel-libre</h1>
            <nav className="flex items-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                    <a href="#">home</a>
                    <a href="#">personajes</a>
                    <a href="#">contacto</a>
                </div>
                <MenuIcon width={20} height={20} className="md:hidden" />
            </nav>
        </header>
    )
}

export default Header