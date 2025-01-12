import React,{useState} from 'react'
import { use } from 'react'

export const UserDetails = () => {
    const [user,setUser] = useState({names:"Sathih",age:21})

  const UpdateUserName = () => (
    setUser({...user,names:"Vijay"})
  )
  
  const UpdateUserAge = () => (
    setUser({...user,age:30})
    
  )

    return (
    <>
    
    <h1>UserDetails</h1>
    <p>{user.names}</p>
    <p>{user.age}</p>
    <button onClick={UpdateUserName}>Update User Name</button>
    <button onClick={UpdateUserAge}>Update User Age</button>
    


    </>
  )
}
