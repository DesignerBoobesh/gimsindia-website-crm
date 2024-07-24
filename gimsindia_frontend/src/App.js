import React, { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUsers = (token) => {
    fetch('http://localhost:8000/api/accounts/users/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUsers(token);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    const token = localStorage.getItem('token');
    fetchUsers(token);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Users</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.username} - {user.email}</li>
            ))}
          </ul>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
