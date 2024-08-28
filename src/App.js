import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Sellers from './components/Sellers';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Sellers</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* Add other navigation items if needed */}
              </li>
            </ul>
            {!isLoggedIn && (
              <Link to='/login' className='btn btn-success'>Login</Link>
            )}
            {isLoggedIn && (
              <button onClick={handleLogout} className="btn btn-danger my-2 my-sm-0">Log Out</button>
            )}
          </div>
        </nav>
        <br />
        <main role='main' className='container'>
          <div className='starter-template'>
        
            
          </div>
          <Routes>
            {isLoggedIn ? (
              <Route path='/getAllSellers' element={<Sellers />} />
            ) : (
              <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            )}
            <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
