// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Post from './Post';
import Data from './Componnets/Data';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <div class="sidebar">
    <Link  to="/">Home</Link>
    <Link  to="/data">Data</Link>
   
  </div>


  <div class="content">
  <Routes>
        <Route path="/" element={loggedIn ? <Post /> : <Login setLoggedIn={setLoggedIn} />} />
        <Route path="/data" element={loggedIn ? <Data /> : <Login setLoggedIn={setLoggedIn} />} />
     
      </Routes>
</div>
     
      </>
  );
}

export default App;
