/* 

JSX 

Componentes : 

1) Son lo mas importante en React y nos dan salida a pantalla
2) Siempre son funciones
3) Siempre arrancan con la primera letra en mayuscula
4) Siempre tienen un retorno

5) Son reutilizables
6) Son partes de la interfaz de usuario

7) Van solos en sus archivos
*/

import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Main from "./layout/Main.jsx"

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
