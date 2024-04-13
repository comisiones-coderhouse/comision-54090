import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Personajes from '../pages/Personajes'
import Contacto from '../pages/Contacto'
import PersonajeContainer from '../pages/PersonajeContainer'

function Main() {
    return (
        <main className='p-4 text-white grow mi-main bg-slate-600'>
            <Routes>

                <Route path='/' element={<Home/>} />

                <Route path='/characters' element={<Personajes/>} />
                
                <Route path='/category/:categoria' element={<Personajes/>} />
                {/* <Route path='/aliens' element={<Personajes/>} /> */}

                {/* /characters/1  - /characters/2  - /characters/3 */}
                <Route path="/characters/:id" element={<PersonajeContainer/>}/>

                <Route path='/contact' element={<Contacto/>} />

                {/* /horacio  - /personajes/73428949 - / */}
                <Route path="*" element={<p>No encontrado</p>} />

            </Routes>
        </main>
    )
}

export default Main