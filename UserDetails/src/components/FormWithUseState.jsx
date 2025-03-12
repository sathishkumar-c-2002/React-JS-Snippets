import { useState } from 'react'
import "./css/style.css"
import { use } from 'react';

export const FormWithUseState = () => {
    const [user, setUser] = useState({
        name: "Sathish",
        age: 22,
        gender: "Male",
        isMarried: true,
        country: "India",
        bio: "My name is Sathish",
    });

    function changeHandler(event) {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        setUser({ ...user, [name]: value })
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>isMarried</td>
                        <td>{user.isMarried ? "Married" : "UnMarried"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <input type='text' placeholder='Enter Full name' name='name' value={user.name} onChange={changeHandler} />
                <input type='number' placeholder='Enter Age' name='age' value={user.age} onChange={changeHandler} />
                <div>
                    <label htmlFor='male'>
                        <input type='radio' name='gender' id='male' checked={user.gender === "Male"} value="Male" onChange={changeHandler} />Male
                    </label>
                    <label htmlFor='female'>
                        <input type='radio' name='gender' id='female' checked={user.gender === "Female"} value="Female" onChange={changeHandler} />Female
                    </label>
                </div>
                <label htmlFor='isMarried'>
                    <input type="checkbox" name='isMarried' id="isMarried" checked={user.isMarried} onChange={changeHandler} />isMarried
                </label>
                <select name='country' onChange={changeHandler} value={user.country}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Africa">Africa</option>
                </select>
                <textarea name="bio" id="bio" cols="30" rows="3" value={user.bio} onChange={changeHandler} />
                
            </form>
        </>
    )
}
