import { Routes, Route } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import PersonajeContainer from '../pages/PersonajeContainer'
import UsersCardContainer from '../widgets/UsersCardContainer'
import Carrito from '../pages/Carrito'

function Main() {
    return (
        <main className='container p-4 mx-auto text-white grow mi-main'>
            <Routes>
                <Route path='/' element={<UsersCardContainer/>} />
                <Route path='/category/:categoria' element={<UsersCardContainer/>} />
                <Route path="/characters/:id" element={<PersonajeContainer/>}/>
                <Route path='/contact' element={<Contacto/>} />
                <Route path='/cart' element={<Carrito/>} />
                <Route path="*" element={<p>No encontrado</p>} />
            </Routes>
        </main>
    )
}

export default Main