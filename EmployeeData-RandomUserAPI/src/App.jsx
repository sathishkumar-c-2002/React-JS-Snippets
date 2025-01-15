import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const url = `https://randomuser.me/api/?results=1`;
        const response = await fetch(url);
        const data = await response.json();

        const newUser = {
          name: data.results[0].name.first,
          age: data.results[0].registered.age,
          gender: data.results[0].gender,
          profile:data.results[0].picture.medium,
        };

        setUsers((prevUsers) => [...prevUsers, newUser]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (count > 0) {
      fetchRandomUser();
    }
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="data">
        <div className="data-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><img src={user.profile}/></td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-section">
          <button type="button" onClick={handleClick}>
            Fetch New User
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
