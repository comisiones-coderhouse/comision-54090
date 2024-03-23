/* import { Button } from 'antd' */
import Page from '../Page'
import UserCard from '../UserCard'

function Main() {
    return (
        <Page title="Home">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 users">
                <UserCard name="pedro" />
                <UserCard name="Ana" />
                <UserCard name="Claudia" />
            </section>
        </Page>
    )
}

export default Main



{/* 
<UserCard
name={name}
age={20}
isDeveloper={true}
languages={["JS", "TS"]}
address={{ street: "Calle falsa", number: 123 }}
/> 
*/}