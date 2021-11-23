import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListUsers from './Component/ListUsers';
import { Route } from 'react-router';
import Details from './Component/Details';

function App() {

  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <Route exact
      path='/List' render={()=> <ListUsers users={users}/>} />
      
      <Route exact path='/Details/:id' render={(props)=><Details {...props}/>}/>
    </div>
    
  );
}

export default App;
