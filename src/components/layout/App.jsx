import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import CarritoProvider from "../../contexto.jsx"
import "../../contexto.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>

      <CarritoProvider>
        <Header />
        <Main />
        <Footer />
      </CarritoProvider>
      <ToastContainer />

    </BrowserRouter>
  )
}

export default App
