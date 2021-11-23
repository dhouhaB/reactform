import { Link } from "react-router-dom"

function CardUser({user}){
    return(
        <div>
            <h1>{user.name}</h1>
            <Link to={`/Details/${user.id}`}><button>Details</button></Link>
        </div>
    )
}

export default CardUser