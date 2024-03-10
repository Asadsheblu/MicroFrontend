// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating successful login
    if (username === 'microex' && password === 'MICROext@') {
      setLoggedIn(true);
      toast.success("Succefuly Login")
      navigate('/');
    } else {
    
      toast.error("Invalid username or password'")
    }
  };

  return (
    <div className='container p-5'>
      <h2>Login</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className='form-control m-3 w-50'  value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password"  className='form-control m-3 w-50' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='btn btn-primary' type="submit">Login</button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;
