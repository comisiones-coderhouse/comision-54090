import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./firebase"


export const getProducts = () => {

  const db = getFirestore(app)
  const productsCollection = collection(db, "products")
  const query = getDocs(productsCollection)

  return query
    .then((resultado) => {
      //resultado == lo que me viene de la base de datos
      //resultado.docs == es un array que representa los documentos de la base de datos
      //resultado.docs[n] == es un objeto que representa un documento de la base de datos, no tiene la data, tiene los metadatos
      //resultado.docs[n].id == es el id del documento
      //resultado.docs[n].data() == es un metodo que me devuelve la data del documento
      const productos = resultado.docs.map(doc => {
        /* console.log(doc.id)
        console.log(doc.data())
        console.log("------------------------") */
        const producto = doc.data() //{title,price,stock....}
        producto.id = doc.id//{title,price,stock....,id}

        return producto
      })
      return productos
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getProductsFromCategories = (categoria) => {
  const db = getFirestore(app)
  const productsCollection = collection(db, "products")
  //const filtro = query(productsCollection, where("price", "==", 3000))
  //const filtro = query(productsCollection, where("category", "==", "Alien"))
  const filtro = query(productsCollection, where("category", "==", categoria))
  const consulta = getDocs(filtro)

  return consulta
    .then((resultado) => {
      const productos = resultado.docs.map(doc => {
        const producto = doc.data()
        producto.id = doc.id
        return producto
      })
      return productos
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getProductDetail = (id) => {
  const db = getFirestore(app)
  const productsCollection = collection(db, "products")
  //const filtro = doc(productsCollection,"hpjLI2e80f808Saog7W0")
  //const filtro = doc(productsCollection, "NGuHrpsIJTTogm6Sc0wj")
  const filtro = doc(productsCollection, id)
  const consulta = getDoc(filtro)

  return consulta
    .then((resultado) => {
      const producto = resultado.data()
      producto.id = resultado.id
      return producto
    })
    .catch((error) => {
      console.log(error)
    })
}

export const createSale = () => {
  const db = getFirestore(app)
  const salesCollection = collection(db, "ventas")

  const venta = {
    items: [/* esto sale del carrito */],
    usuario: { nombre: "Horacio", tel: "123456789", email: "test@test.com" },
    fechaDeCompra: serverTimestamp(),
    status: "pendiente",
    total: 0
  }

  const consulta = addDoc(salesCollection, venta)
  
  consulta
    .then((resultado)=>{
      console.log(resultado)
    })
    .catch((error)=>{
      console.log(error)
    })

}

//export const updateProductStock = () => {}
