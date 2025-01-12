import React,{useState} from 'react'

export const UserDetails = () => {
    const [user,setUser] = useState({FName:"FirstName",LName:"LastName",age:0})
    function changeHandler(event){
        setUser({...user,[event.target.name]:event.target.value})
    }
    return (
    <>
    <p>{user.FName} {user.LName} {user.age}</p>
    <form>
        <input type='text' placeholder='Enter First Name' name ="FName" value={user.FName} onChange={changeHandler}/>
        <input type='text' placeholder='Enter Last Name' name ="LName" value={user.LName} onChange={changeHandler}/>
        <input type='text' placeholder='Enter Age' name ="age" value={user.age} onChange={changeHandler}/>
    </form>
    </>
  )
}
