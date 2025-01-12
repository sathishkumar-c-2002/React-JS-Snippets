import React,{useState} from 'react'

export const UserDetails = () => {
  const [userName,setUserName] = useState("Sathish")
  const [userAge, setUserAge] = useState(21)

  const UpdateUserName = () => (
    // setUserName("Sathishkumar")
    userName==="Sathish"?setUserName("Sathishkumar") : setUserName("Sathish")

  )
  
  const UpdateUserAge = () => (
    // setUserAge(22)
    userAge===21?setUserAge(22):setUserAge(21)
  )

    return (
    <>
    
    <h1>UserDetails</h1>
    <p>{userName}</p>
    <p>{userAge}</p>
    <button onClick={UpdateUserName}>Update User Name</button>
    <button onClick={UpdateUserAge}>Update User Age</button>
    


    </>
  )
}
