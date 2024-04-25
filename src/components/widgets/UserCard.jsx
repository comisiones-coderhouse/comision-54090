import { Link } from "react-router-dom";

function UserCard({ character }) {

    const { name , imageUrl , id } = character

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={imageUrl} alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{name}</h2>
            <Link to={`/characters/${id}`}>ver mas</Link>
        </div>
    )
}


export default UserCard;