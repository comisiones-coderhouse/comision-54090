function Personaje(props) {
    return (
        <>
            <h2>Detalle del personaje {props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name} />
            <p>{props.character.species}</p>
            <p>vive en : {props.character.origin ? props.character.origin.name : "Desconocido"}</p>
        </>
    )
}
export default Personaje