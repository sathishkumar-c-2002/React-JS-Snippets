import React,{useState} from 'react'

export const UserDetails = () => {
    const [user,setUser] = useState({names:"Name",age:0})

    function changeName(event){
    //Using multiple varibles
        // const newStateObject = {...user}
        // newStateObject.names = event.target.value
        // setUser( newStateObject)

    //with One Arrow Function    
        setUser((oldState)=>{
            return {...oldState,names:event.target.value}
        })

    }
    function changeAge(event){
        setUser((oldState)=>{
            return {...oldState,age:event.target.value}
        })

    }

    return (
    <>
    <p>{user.names} {user.age}</p>
    <form>
        <input type='text' placeholder='Enter Name' value={user.names} onChange={changeName}/>
        <input type='text' placeholder='Enter Age' value={user.age} onChange={changeAge}/>
    </form>
    </>
  )
}
