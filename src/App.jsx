import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Main from "./layout/Main.jsx"
//import { data } from "./data.js"
/* import data from "./data.json" */

/* fetch("/data.json") */

/* const data = [
  {
      "id": 1,
      "name": "Rick Sanchez",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

  },
  {
      "id": 2,
      "name": "Morty Smith",
      "image" : "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }
]
 */
/* const miPromesa = new Promise((res) => {
  setTimeout(() => {
    res(data)
  }, 2000)
})

miPromesa.then((res)=>{
  console.log(res)
}) */


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
