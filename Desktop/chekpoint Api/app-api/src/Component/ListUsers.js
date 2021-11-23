import CardUser from "./CardUser"

function ListUsers({users}){
    return(
        <div>
            {
                users.map(user=><CardUser user={user}/>)
            }
        </div>
    )
}

export default ListUsers