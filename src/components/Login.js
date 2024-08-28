import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:8080/login', { username, password })
      .then(response => {
        if (response.status === 200) {
          const { id, username, password } = response.data;
          console.log('User ID:', id);
          console.log('Username:', username);
          console.log('Password:', password); // Handle with care; consider removing password in production
          setIsLoggedIn(true);
          navigate('/getAllSellers');
        } else {
          setError('Invalid username or password');
        }
      })
      .catch(() => {
        setError('Error logging in');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div style={{ width: '25%', margin: '0 auto', padding: '20px', backgroundColor: 'lightblue' }}>
          <table>
            <tr>
                <td><b>UserName</b></td>
                <td><b>:</b></td>
                <td><input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /></td>
            </tr>
            <tr>
                <td><b>Password</b></td>
                <td><b>:</b></td>
                <td><input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /></td>
            </tr>
        </table>
      </div>
      <button onClick={handleLogin} className="btn btn-primary mt-3">Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
