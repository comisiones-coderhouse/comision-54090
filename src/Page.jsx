function Page(props) {

    return (
        <main className='p-4 grow mi-main'>
            <h2 className='mb-4 text-2xl font-bold'>{props.title}</h2>
            {props.children}
        </main>
    )
}

export default Page