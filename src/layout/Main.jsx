import Page from '../Page'
import UserCard from '../UserCard'
import Timer from "../Timer"
import UserList from "../UserList"

function Main() {
    return (
        <Page title="Home">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
                {/* 
                <UserCard name="pedro" age="34" isDev={true}/>
                <UserCard name="Ana" age="23" isDev={false} />
                <UserCard name="Claudia" age="45" isDev={true}/> 
                */}
                {/* <Timer/> */}
                <UserList/>
            </section>
        </Page>
    )
}

export default Main