import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"

function Header() {
    return (
        <header className="flex justify-between p-4 text-white shadow-md bg-slate-800">

            <h1 id="titulo" className="encabezado">Blips and Chitz</h1>

            <Routes>
                <Route path="/characters" element={
                    <input type="text" placeholder="Busca un personaje" />
                } />
            </Routes>

            <Navbar />

        </header>
    )
}

export default Header