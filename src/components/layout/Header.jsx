import Navbar from "./Navbar"
import { Routes, Route, Link } from "react-router-dom"

function Header() {
    return (
        <header className="p-4 text-white shadow-md bg-slate-800">
            <div className="container flex justify-between mx-auto">
                <Link to="/">
                    <h1 id="titulo" className="encabezado">Blips and Chitz</h1>
                </Link>
                <Routes>
                    <Route path="/characters" element={
                        <input type="text" placeholder="Busca un personaje" className="p-2 rounded-md" />
                    } />
                </Routes>
                <Navbar />
            </div>
        </header>
    )
}

export default Header