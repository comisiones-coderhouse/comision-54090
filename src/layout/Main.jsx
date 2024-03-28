import Page from '../Page'
import UserCard from '../UserCard'
import Timer from "../Timer"
import UserList from "../UserList"





const miPromesa = new Promise((res, rej) => { 
    console.log("Pidiendo...")
    setTimeout(()=>{
        res()
    },5000)
})

miPromesa.then(() => { console.log("Bien") })

miPromesa.catch(() => { console.log("Mal") })

miPromesa.finally(() => { console.log("Finalizo") })






function Main() {

    const users = ["Horacio", "Carlos", "Ana", "Claudia", "Eddy"]

    return (
        <Page title="Home">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">

                {/* 
                
                {users.map((user, i) => {
                    return (
                        <div key={i}>
                            <p>{user}</p>
                            <p> soy la edad </p>
                        </div>
                    )
                })} 
                
                */}

                {users.map((user, i) => {
                    return <UserCard key={i} name={user} />
                })}

                {/* <Timer/> */}
                {/* <UserList /> */}
            </section>
        </Page>
    )
}

export default Main