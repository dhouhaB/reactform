import axios from "axios"
import { useEffect, useState } from "react"

function Details(props){
    const id = props.match.params.id
    console.log(id)
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>setUser(res.data)).then(()=>setLoading(false)).catch(err=>console.log(err))
    },[])
    console.log(user)
    return(
        <div>
            {
             ! loading?
                <h1>{user.name}</h1> : <h1>stana</h1>
            }
            
        </div>
    )
}

export default Details