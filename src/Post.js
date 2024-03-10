// Post.js

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Post = () => {
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://microex.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apiEndpoint,
          apiKey
        })
      });

      if (response.ok) {
        console.log('Post sent successfully');
        toast('Post sent successfully')
        // Optionally, you can reset the form after successful submission
        setApiEndpoint('');
        setApiKey('');
      } else {
        
        toast.error('Failed to send Post to the server')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='text-center'>
       
      <h1 className='text-center'>Add Your Post</h1>
      <form onSubmit={handleSubmit} className='form-control'>
        <div>
          <label htmlFor="api">Enter API Endpoint:</label>
          <input
            className='form-control'
            type='text'
            id='api'
            name='api'
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            placeholder='Enter API Endpoint'
          />
        </div>
        <div>
          <label htmlFor="apiKey">Enter API Key:</label>
          <input
            className='form-control'
            type='text'
            id='apiKey'
            name='apiKey'
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder='Enter API Key'
          />
        </div>
        <button className='btn btn-success' type="submit">POST</button>
       <ToastContainer/>
      </form>
     
      
    </div>
  );
};

export default Post;
